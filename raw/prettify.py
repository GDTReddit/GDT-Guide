import json

data = json.load(open('game_data.json'))

topics = data.get("topics")
consoles = data.get("consoles")

def generate_topics_result(topics):
    weightings = {
        "0.6": "--- Terrible",
        "0.7": "-- Bad",
        "0.8": "- Okay",
        "0.9": "++ Good",
        "1": "+++ Great"
    }
    result = ""
    for topic in topics:
        result += "\n### {name}\n".format(name=topic['name'])
        result += "#### Genre Combinations\n"
        result += "- Action: {}\n".format(weightings.get(str(topic['genreWeightings'][0])))
        result += "- Adventure: {}\n".format(weightings.get(str(topic['genreWeightings'][1])))
        result += "- RPG: {}\n".format(weightings.get(str(topic['genreWeightings'][2])))
        result += "- Simulation: {}\n".format(weightings.get(str(topic['genreWeightings'][3])))
        result += "- Strategy: {}\n".format(weightings.get(str(topic['genreWeightings'][4])))
        result += "- Casual: {}\n".format(weightings.get(str(topic['genreWeightings'][5])))
        result += "#### Audience Combinations\n"
        result += "- Young: {}\n".format(weightings.get(str(topic['audienceWeightings'][0])))
        result += "- Everyone: {}\n".format(weightings.get(str(topic['audienceWeightings'][1])))
        result += "- Mature: {}\n".format(weightings.get(str(topic['audienceWeightings'][2])))
    return result

def generate_consoles_result(consoles):
    weightings = {
        "0.6": "--- Terrible",
        "0.7": "-- Bad",
        "0.8": "- Okay",
        "0.9": "++ Good",
        "1": "+++ Great"
    }
    result = ""
    for console in consoles:
        result += "\n### {name}\n".format(name=console['name'])
        if 'company' in console:
            result += "Created by {company}\n".format(company=console['company'])
        result += "Release Date: {releasedate}\n\n".format(releasedate=console['published'])
        result += "Retire Date: {retiredate}\n".format(retiredate=console['platformRetireDate'])
        result += "#### Genre Combinations\n"
        result += "- Action: {}\n".format(weightings.get(str(console['genreWeightings'][0])))
        result += "- Adventure: {}\n".format(weightings.get(str(console['genreWeightings'][1])))
        result += "- RPG: {}\n".format(weightings.get(str(console['genreWeightings'][2])))
        result += "- Simulation: {}\n".format(weightings.get(str(console['genreWeightings'][3])))
        result += "- Strategy: {}\n".format(weightings.get(str(console['genreWeightings'][4])))
        result += "- Casual: {}\n".format(weightings.get(str(console['genreWeightings'][5])))
        result += "#### Audience Combinations\n"
        result += "- Young: {}\n".format(weightings.get(str(console['audienceWeightings'][0])))
        result += "- Everyone: {}\n".format(weightings.get(str(console['audienceWeightings'][1])))
        result += "- Mature: {}\n".format(weightings.get(str(console['audienceWeightings'][2])))
    return result

topics_result = generate_topics_result(topics)
consoles_result = generate_consoles_result(consoles)

with open('../Consoles.md', 'w') as f:
    f.write("""
## Consoles
-----------
{consoles}""".format(consoles=consoles_result))

with open('../Topics.md', 'w') as f:
    f.write("""
## Topics
-----------
{topics}""".format(topics=topics_result))