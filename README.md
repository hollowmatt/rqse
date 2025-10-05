Manning React Quickly - Second Edition book

Using Vite for build engine:

```
npm install vite @vitejs/plugin-react --save-dev
```

using Reagraph for graphing:

```
npm install reagraph --save
```


## Build and deploy on Google Cloud

### One time steps
1. Enable required services
```
gcloud services enable artifactregistry.googleapis.com run.googleapis.com cloudbuild.googleapis.com
```

2. Create repository in artifact registry 
```
gcloud artifacts repositories create react-app-repo \
  --repository-format=docker \
  --location=us-central1
```

3. Authenticate docker with artifact registry
```
gcloud auth configure-docker us-central1-docker.pkg.dev
```

### Build/Deploy/Run steps (iterative)
you will need the following environment variables set:
```
export PROJECT_ID=[id]
export REPO_NAME="react-app-repo"
export REGION="us-central1"   
export IMAGE_NAME="react-app"
export IMAGE_TAG="latest"
```
Then use an env var IMAGE_PATH to aggregate them:
```
IMAGE_PATH="${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPO_NAME}/${IMAGE_NAME}:${IMAGE_TAG}"
```

1. build multi platform 
```
docker buildx build --platform linux/amd64,linux/arm64 -t $IMAGE_PATH --push .
```

2. push to repo
```
docker push $IMAGE_PATH
```

3. deploy and run
```
gcloud run deploy react-app --image $IMAGE_PATH --platform managed --region $REGION --allow-unauthenticated
```