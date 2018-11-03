import re
import string


ballot_file = open("ballot_text.txt","r")
text = ballot_file.read()
count = text.find("Shall")
cutwords = text[count+1:]
new_list = cutwords.split()
name_list = []
for i in range(len(new_list)): 
    cap = True
    for char in new_list[i]:
        if char not in string.ascii_uppercase:
            cap = False
    if cap:
        if (i+1) < len(new_list) and new_list[i+1] == ".":
                name_list.append(new_list[i]+".")
        else:
            name_list.append(new_list[i])

no_list = ["YES",'STATE','NO','LIEUTENANT', 'GOVERNOR','SECRETARY', 'OF', 'STATE','O','SCHOOL'
,'SUPERINTENDENT','PUBLIC', 'INSTRUCTION', 'CONTROLLER','CPA','IIIIIIIIIIIIIIIIIIIIII', 'IIIIIIIIIIIIIIIIIIIIIIIIIIIII'
,'WRITE', 'IN', 'TREASURER', 'PLACER', 'COUNTY','EDUCATION', 'GOVERNING', 'BOARD', 'MEMBER', 'TRUSTEE', 'AREA',"CFO"]

junk_free = []
for word in name_list:
    if word[0] == "O":
        word = word[1:]
    if word not in no_list:
        if len(word) >1:
            junk_free.append(word)

final = []
x= 0
while x<len(junk_free):
    if x+1 < len(junk_free):
        if junk_free[x+1].find(".") != -1:
            first = junk_free[x][0]+junk_free[x][1:].lower()
            last = junk_free[x+2][0]+junk_free[x+2][1:].lower()
            name = first+" "+junk_free[x+1]+" "+last
            final.append(name)
            x+=3
        else:
            first = junk_free[x][0]+junk_free[x][1:].lower()
            last = junk_free[x+1][0]+junk_free[x+1][1:].lower()
            name = first+" "+last
            final.append(name)
            x+=2

print(final)

        
