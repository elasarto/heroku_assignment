# import necessary libraries
import numpy as np
import datetime as dt

from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

# Python SQL toolkit and Object Relational Mapper
import sqlalchemy as sa
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, inspect, func, desc, and_
from sqlalchemy import MetaData

#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///DataSets/belly_button_biodiversity.sqlite", echo=False)

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save references to the table
Otu = Base.classes.otu
Samples = Base.classes.samples
Samples_metadata = Base.classes.samples_metadata

# Create our session (link) from Python to the DB
session = Session(engine)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

@app.route("/")
def home():

    return render_template("index.html")

@app.route("/names")
def names():

    result = session.query(Samples).all()
    names = []
    for c in Samples.__table__.c:
        if c.name != "otu_id":
           names.append(c.name)
        
    return jsonify(names)

@app.route("/otu")
def otu():

    result = session.query(Otu.lowest_taxonomic_unit_found).all()
    for row in result:

        results = list(np.ravel(result))
        return jsonify(results)

@app.route("/metadata/<sample>")
def metadata(sample):
    sample = sample

    result = session.query(Samples).all()
    names2 = []
    for c in Samples.__table__.c:
        if c.name != "otu_id":
           names2.append(c.name)

    sel = [Samples_metadata.AGE,
        Samples_metadata.BBTYPE,
        Samples_metadata.ETHNICITY,
        Samples_metadata.GENDER,
        Samples_metadata.LOCATION,
        Samples_metadata.SAMPLEID,
      ]

    results = session.query(*sel).\
        order_by(Samples_metadata.SAMPLEID).all()

    meta_samples = results

    keys = ["Age", "BBType", "Ethnicity", "Gender", "Location", "SampleID"]
    data = meta_samples

    meta_samples_dict = [dict(zip(keys, d)) for d in data]
    
    final_meta_dict = dict(zip(names2, meta_samples_dict))

    for k, v in final_meta_dict.items():
        if k == sample:
            
            return jsonify(v)

@app.route("/wfreq/<sample>")
def wfreq(sample):

    result = session.query(Samples).all()
    names3 = []
    for c in Samples.__table__.c:
        if c.name != "otu_id":
           names3.append(c.name)

    sel = [Samples_metadata.WFREQ]

    results = session.query(*sel).\
        order_by(Samples_metadata.SAMPLEID).all()

    washes = results

    # keys = ["Wash Frequency"]
    data = washes

    # washes_dict = [dict(zip(keys, d)) for d in data]
    
    final_wash_dict = dict(zip(names3, data))

    for k, v in final_wash_dict.items():
        if k == sample:
            
            return jsonify(v)

# @app.route("/samples/<sample>")

@app.route("/wfreq2")
def wfreq2():

    names5 = []
    result = session.query(Samples).all()
    for c in Samples.__table__.c:
        if c.name != "otu_id":
            names5.append(c.name)

    sel = [Samples_metadata.WFREQ]

    results = session.query(*sel).all()

    washes = results
    
    wash_dict = dict(zip(names5, washes))   

    washes2 = list(np.ravel(washes))

    for k, v in wash_dict.items():
        
        return jsonify(washes2)

if __name__ == '__main__':
    app.run(debug=True) 