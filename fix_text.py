#!/usr/bin/env python3
with open('app/page.tsx', 'r') as f:
    content = f.read()

start_idx = content.find('          <p className={styles.sectionIntro}>\n            純情な恋愛感情で')
end_idx = content.find('          </p>\n\n          <div className={styles.profileLayout}>')

if start_idx == -1:
    print('Marker not found')
    exit(1)

print(f'Found at start={start_idx}, end={end_idx}')

old_block = content[start_idx:end_idx + 14]
print('Old block preview:', repr(old_block[:100]))

# Azuma's EXACT text (as provided in message)
azuma_text = """純情な恋愛感情で*!
          </p>"""

new_block = '          <p className={styles.sectionIntro}>\n            ' + azuma_text + '\n\n          <div className={styles.profileLayout}>'

print('New block preview:', repr(new_block[:100]))

content = content[:start_idx] + new_block + content[end_idx + 14:]

with open('app/page.tsx', 'w') as f:
    f.write(content)

print('Done! Check lines 47-52:')

with open('app/page.tsx', 'r') as f:
    lines = f.read().split('\n')
for i, l in enumerate(lines[46:55], 47):
    print(f'{i}: {l}')
