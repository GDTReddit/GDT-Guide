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
        result += ""
    return result

result = """
## Topics
{topics}

## Consoles
{consoles}
"""
topics_result = generate_topics_result(topics)
with open('../DOCS.md', 'w') as f:
    f.write(result.format(topics=topics_result, consoles=""))