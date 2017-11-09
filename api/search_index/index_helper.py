from whoosh.qparser import MultifieldParser, FuzzyTermPlugin, OrGroup
from whoosh import index
import os
dir = os.path.dirname(__file__)


def search_index(index_dir, schema, attributes, id_name, query):
    ix = index.open_dir(dir + "/" + index_dir)
    mqp = MultifieldParser(attributes, schema=schema, group=OrGroup)
    mqp.add_plugin(FuzzyTermPlugin)
    q = mqp.parse("*%s~3/2*" % (query))

    with ix.searcher() as s:
        results = s.search(q)
        return [r[id_name] for r in results]
