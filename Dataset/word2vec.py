from gensim.parsing.preprocessing import STOPWORDS
from collections import defaultdict
from gensim import models, similarities
import json, re, numpy as np

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
word2vec.save("w2vmodel.bin")