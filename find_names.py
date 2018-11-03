import nltk
import re
# nltk.download('punkt')
# nltk.download('averaged_perceptron_tagger')
# nltk.download('maxent_ne_chunker')
# nltk.download('words')
# nltk.download('wordnet')
from nameparser.parser import HumanName
from nltk.corpus import wordnet

person_list = []
person_names=person_list
def get_human_names(text):
    tokens = nltk.tokenize.word_tokenize(text)
    pos = nltk.pos_tag(tokens)
    sentt = nltk.ne_chunk(pos, binary = False)

    person = []
    name = ""
    for subtree in sentt.subtrees(filter=lambda t: t.label() == 'PERSON'):
        for leaf in subtree.leaves():
            person.append(leaf[0])
        if len(person) > 1: #avoid grabbing lone surnames
            for part in person:
                name += part + ' '
            if name[:-1] not in person_list:
                person_list.append(name[:-1])
            name = ''
        person = []
    print (person_list)

# text = """

# Some economists have responded positively to Bitcoin, including 
# Francois R. Velde, senior economist of the Federal Reserve in Chicago 
# who described it as "an elegant solution to the problem of creating a 
# digital currency." In November 2013 Richard Branson announced that 
# Virgin Galactic would accept Bitcoin as payment, saying that he had invested 
# in Bitcoin and found it "fascinating how a whole new global currency 
# has been created", encouraging others to also invest in Bitcoin.
# Other economists commenting on Bitcoin have been critical. 
# Economist Paul Krugman has suggested that the structure of the currency 
# incentivizes hoarding and that its value derives from the expectation that 
# others will accept it as payment. Economist Larry Summers has expressed 
# a "wait and see" attitude when it comes to Bitcoin. Nick Colas, a market 
# strategist for ConvergEx Group, has remarked on the effect of increasing 
# use of Bitcoin and its restricted supply, noting, "When incremental 
# adoption meets relatively fixed supply, it should be no surprise that 
# prices go up. And that’s exactly what is happening to BTC prices."
# """

ballot_file = open("ballot_text.txt","r")
text = ballot_file.read()
# text = "Anna ate Addie and Amanda Nanxi hurt Lillian Bu."
# print(text)
# string = "The following words are ALL CAPS. The following word is in CAPS."
count = text.find("Shall")
print("count",count)
cut = text[count+1:]
# print("cut",cut)
matches = re.findall(r"([A-Z]+\s?[A-Z]+[^a-z0-9\W])", cut, re.DOTALL)
no_list = ["YES","STATE","GOVERNOR","YES\nONO",'LIEUTENANT\nGOVERNOR','SECRETARY\nOF','SCHOOL','STATE\nSUPERINTENDENT', 'F\nPUBLIC', 'INSTRUCTION', 'CONTROLLER'
,'CFO','WRITE', 'IN\nTREASURER','PLACER\nCOUNTY', 'BOARD\nOF', 'CPA','EDUCATION', 'GOVERNING\nBOARD', 'MEMBER\nTRUSTEE', 'AREA','IIIIIIIIIIIIIIIIIIIIII\nIIIIIIIIIIIIIIIIIIIIIIIIIIIII']
names_list = []
ratchet = []
for i in matches:
    print(i)
    if i[0] == "O":
        i = i[1:]
    if i not in no_list:
        if i.find("\n") != -1:
            full = i.split("\n")
            for chunk in full:
                if chunk !="":
                    names_list.append(chunk)
            # ratchet.append(full)
        else:
            names_list.append(i)
print("names_list",names_list)
print(len(names_list))
print("ratchet", ratchet)

# print(matches)


# names = get_human_names(text)
# print(names)
# for person in person_list:
#     person_split = person.split(" ")
#     for name in person_split:
#         if wordnet.synsets(name):
#             if(name in person):
#                 person_names.remove(person)
#                 break

# print(person_names)