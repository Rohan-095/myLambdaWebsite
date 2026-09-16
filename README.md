# myLambdaWebsite

A serverless website deployed on AWS using **API Gateway and AWS Lambda**, with automated CI/CD through **GitHub Actions** and secure AWS authentication using **OIDC**.

## Architecture

```text
                    GitHub Repository
                           │
                           │ git push
                           ▼
                    GitHub Actions
                           │
                           │ OIDC
                           ▼
                      AWS IAM Role
                           │
                           │ Deploy
                           ▼
                      AWS Lambda
                           │
                           ▼
                     API Gateway
                           │
                           ▼
                     Live Website
```

## AWS Architecture

* **AWS Lambda** — Hosts the website application and serves static files.
* **Amazon API Gateway** — Provides the HTTP endpoint and routes requests to Lambda.
* **AWS IAM** — Controls deployment permissions using a dedicated GitHub Actions role.
* **GitHub OIDC** — Allows GitHub Actions to authenticate with AWS without storing long-lived AWS access keys.

## CI/CD Pipeline

Every push to the `main` branch automatically triggers the deployment pipeline.

```text
Code Change
    │
    ▼
git push
    │
    ▼
GitHub Actions
    │
    ├── Checkout
    ├── Validate Lambda
    ├── Package Application
    └── Deploy to AWS Lambda
                    │
                    ▼
              API Gateway
                    │
                    ▼
              Live Website
```

### Pipeline Steps

1. GitHub Actions checks out the repository.
2. The Lambda handler is validated.
3. The application files are packaged into a deployment ZIP.
4. GitHub Actions authenticates with AWS using OIDC.
5. The Lambda function is updated automatically.
6. API Gateway continues serving the updated Lambda version.

## Technologies

* AWS Lambda
* Amazon API Gateway
* AWS IAM
* GitHub Actions
* GitHub OIDC
* Node.js
* HTML
* CSS
* JavaScript

## Project Structure

```text
myLambdaWebsite/
│
├── index.js
├── html/
│   ├── index.html
│   ├── contact.html
│   └── 404.html
│
├── css/
│   └── main.css
│
├── js/
│   └── main.js
│
├── img/
│   └── logo.jpg
│
├── download/
│   └── pricelist.pdf
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── .gitignore
└── README.md
```

## Deployment

The application is deployed automatically whenever changes are pushed to the `main` branch.

No manual Lambda ZIP upload is required.

## Security

The GitHub Actions workflow uses **AWS OIDC** instead of storing long-lived AWS access keys in GitHub.

The IAM role is restricted to this repository and the `main` branch, with permissions limited to updating the specific Lambda function.

## Goal

This project demonstrates practical experience with:

* Serverless AWS architecture
* Infrastructure security
* IAM least-privilege access
* Git-based workflows
* CI/CD automation
* GitHub Actions
* AWS Lambda deployment
