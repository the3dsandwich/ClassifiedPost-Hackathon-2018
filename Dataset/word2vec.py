from gensim.parsing.preprocessing import STOPWORDS
from collections import defaultdict
from gensim import models, similarities
from sklearn import linear_model
import json, re, numpy as np
import pickle

data = open("dataset_dumped.json", "r")
loaded = json.load(data)
records = loaded['result']['records']

titles = [ r['Title'].lower() for r in records ]

stoplist = set('s m d t u ll ur ve'.split())

texts = []
titlecount = 0
for title in titles:
    texts.append([word for word in re.sub("[^\w]", " ",  title).split() if word not in STOPWORDS.union(stoplist)])
    titlecount += 1

frequency = defaultdict(int)
for text in texts:
    for token in text:
        frequency[token] += 1

frequency[''] = 0

texts = [[token for token in text if frequency[token] > 1] for text in texts]
texts = np.array(texts)

word2vec = models.word2vec.Word2Vec(texts, size=400, window=4, min_count=5, workers=4)
wv = [[word2vec.wv[word] for word in title if word in word2vec.wv] for title in texts]
wv = np.array(wv)
X = np.empty((len(wv), 8000))
for i in range(0, 35768):
    wv[i] = np.reshape(wv[i], (-1))
    zero = np.zeros((8000)-int(wv[i].size))
    X[i] = np.concatenate((wv[i], zero))

numbers = open("number.txt", "r").read().split(' ')
numbers = [int(i) for i in numbers]
numbers = np.array(numbers)

print("fitting...")
sgd = linear_model.SGDRegressor()
a = sgd.fit(X, numbers, coef_init=None, intercept_init=None, sample_weight=None)


SGDRegressor_saved = open("sgd.sgd", "wb")
pickle.dump(a, SGDRegressor_saved)

print(SGDRegressor_saved)

Word2Vec_saved = open("word2vec.wv", "wb")
pickle.dump(word2vec, Word2Vec_saved)

print(Word2Vec_saved)

print("dumped")