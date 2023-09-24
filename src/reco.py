from sklearn.metrics.pairwise import linear_kernel
from sklearn.feature_extraction.text import TfidfVectorizer
import pandas as pd
import sys
from pymongo import MongoClient
import json
client = MongoClient(
    "mongodb+srv://new_user:skipper1007@cluster0.t3cyiey.mongodb.net/")
db = client.get_database('user')
record = db.database_apis
record.count_documents({})
data = list(record.find())
df = pd.DataFrame(data)
df.drop(['video_url'], axis=1, inplace=True)
df.dropna(subset=['content'], inplace=True)
# user_det = db.users
# user_names = list(user_det.find())
# df_name = pd.DataFrame(user_names)
hist_fetch = sys.argv[1:]
user_history = [str(item) for item in hist_fetch]

# ML


tfidf_vectorizer = TfidfVectorizer(stop_words='english')
tfidf_matrix = tfidf_vectorizer.fit_transform(df['content'])

# Calculate cosine similarity between user history and all articles
user_history_vector = tfidf_vectorizer.transform(user_history)
cosine_similarities = linear_kernel(user_history_vector, tfidf_matrix)

similar_articles_indices = cosine_similarities.argsort()[0][::-1]

# Recommend top N articles
top_n = 5
recommended_articles = []

for i in range(len(user_history), top_n):
    index = similar_articles_indices[i]
    recommended_articles.append({
        'title': df['title'][index],
        'link': df['link'][index],
        'keywords': df['keywords'][index],
        'creator': df['creator'][index],
        'description': df['description'][index],
        'content': df['content'][index],
        'pubDate': df['pubDate'][index],
        'image_url': df['image_url'][index],
        'country': df['country'][index],
        'category': df['category'][index],
        'language': df['language'][index]
    })

json_obj = json.dumps(recommended_articles)
print(json_obj)
