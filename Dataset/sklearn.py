import sklearn
import gensim.models

inpath = "w2vmodel.bin"
wvmodel = gensim.models.Word2Vec.load(inpath)