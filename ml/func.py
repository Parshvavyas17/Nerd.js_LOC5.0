import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import difflib
import mongo


def recommend(user, jobType, location, experience):
    df = mongo.getJobs()
    jobdf = df[(df['type'] == str(jobType)) & (df['minExp'] <= int(experience)) & (
        (df["location"] == str(location)) | (df["location"] == "Remote"))]
    # print(jobdf.shape)
    # df['combined'] = ""
    indexes = jobdf.index
    # print(indexes[1])
    jobdf.fillna("", inplace=True)
    jobdf['skills'] = jobdf['skills'].astype('str')
    jobdf['title'] = jobdf['title'].astype('str')
    combined = pd.Series(jobdf['title']+" "+jobdf['skills'])
    # for i, row in jobdf.iterrows():
    #     combined[i] = jobdf['skills']+" "+jobdf['title']
    # combined = pd.Series(combined)
    vectorizer = TfidfVectorizer()
    # combined = jobdf['combined'].to_list()
    featureVectors = vectorizer.fit_transform(combined)
    similarity = cosine_similarity(featureVectors)
    internships = combined.to_list()
    closest = difflib.get_close_matches(user, internships)
    match = closest[0]
    # print(match)
    index = combined[combined == match].index[0]
    indexes = combined.index.to_list()
    index = indexes.index(index)
    similar = list(enumerate(similarity[index]))
    sort = sorted(similar, key=lambda x: x[1], reverse=True)
    sort = sort[:20]
    i = 0
    index = []
    for job in sort:
        if (job[1] < 0.2):
            break
        i = indexes[job[0]]
        index.append(i)
    ids = []
    for i in index:
        jid = df.loc[i, '_id']
        ids.append(jid["$oid"])
    return ids
