arr =[0,4,1,3,1,2,4,1]
counts = [0,0,0,0,0]
for a in arr:
    counts[a] += 1
new_arr = []
for i in range(len(counts)):
    new_arr += [i]*counts[i]
print(new_arr)