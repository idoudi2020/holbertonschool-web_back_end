#!/usr/bin/env python3
""" list all documents in a collection """


def list_all(mongo_collection):
    """ list all documents in a collection """
    a_list = []
    if mongo_collection is not None:
        documents = mongo_collection.find()
        return documents

    return a_list
