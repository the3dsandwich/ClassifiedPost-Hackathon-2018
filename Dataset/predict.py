import pickle
import re, numpy as np
from sklearn import linear_model
from gensim.parsing.preprocessing import STOPWORDS

SGDRegressor_saved = open("sgd.sgd", "rb")
sgd = pickle.load(SGDRegressor_saved)

Word2Vec_saved = open("word2vec.wv", "rb")
word2vec = pickle.load(Word2Vec_saved)

print("loaded")

stoplist = set('s m d t u ll ur ve'.split())

# while 1:
#     test = input("What's the title for your next article?\n")
#     tests = []
#     tests.append([word for word in re.sub("_", " ",  test.lower()).split() if word not in STOPWORDS.union(stoplist)])
#     tests = tests[0]
#     w2v = [word2vec.wv[word] for word in tests if word in word2vec.wv]

#     X = np.empty((len(w2v), 8000))
#     w2v = np.reshape(w2v, (-1))
#     zero = np.zeros((8000)-int(w2v.size))
#     X = np.concatenate((w2v, zero))
#     ans = int(sgd.predict(X.reshape(1,-1))[0])

#     print("Your expectd view count is:")
#     print(ans)

def pd(test):
    tests = []
    tests.append([word for word in re.sub("_", " ",  test.lower()).split() if word not in STOPWORDS.union(stoplist)])
    tests = tests[0]
    w2v = [word2vec.wv[word] for word in tests if word in word2vec.wv]

    X = np.empty((len(w2v), 8000))
    w2v = np.reshape(w2v, (-1))
    zero = np.zeros((8000)-int(w2v.size))
    X = np.concatenate((w2v, zero))
    ans = int(sgd.predict(X.reshape(1,-1))[0])

    return ans