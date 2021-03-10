# terra-utopia-website

 The source code for https://terra-utopia.world

<br><br><br>



# Development

## Git Commands

```bash
# show current state of everything
git status

# list configured remote repositories
git remote -v

# stage all changes in a file to the index
git add <file or directory>
git add .

# save a new commit with currently staged changes
git commit -m "<message>"

# push changes to a remote repository
git push
git push origin
git push origin main

# download and checkout new commits from a remote repository
git pull
git pull origin
git pull origin main

# show current changes
git diff  # unstaged changes
git diff --staged # staged changes
```

<br><br>


## Nuxt Commands

```bash
# for 'target: static' ...

# dev server
npm run dev

# generate static 'dist/'
npm run generate

# serve 'dist/' files
npm run start


# tip: see "scripts" field in 'package.json'
```
