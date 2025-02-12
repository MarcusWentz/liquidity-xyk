# Hosting

To host an mdbook on GitHub pages:

1. Go to the following project path as an admin to a GitHub repo:

https://github.com/`repo-owner`/`repo-name`/settings/pages

2. On that page, find

```
    Build and deployment
        Source
```

then click the drop down options to click 

`GitHub Actions`

3. Refresh the page and look for a 

`mdbook book configuration template`

then click on it.

4. Follow the insturctions to commit the following generated file:

`.github/workflows/mdbook.yml`

5. Wait for the GitHub commit to build and pass with a ✅.  