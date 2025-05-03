## Install nestjs CLI
```bash
nest i -g @nestjs/cli
```

## Check Nestjs version
```bash
nest --version
```
```
11.0.7
```
Latest can be found here https://github.com/nestjs/nest-cli/releases/

## Create a new project
```bash
nest new server-logging-example
```

## Set nvm version
```bash
touch .nvmrc
```
```bash
echo "lts/jod" > .nvmrc
```

## Remove boilerplate
### Remove test folder and functionality
```bash
rm -rf test
```
```bash
rm src/app.controller.spec.ts
```
```bash
npm uninstall @nestjs/testing jest @types/jest @types/supertest ts-jest
```

### Remove eslint
```
rm eslint.config.mjs
```
```bash
npm uninstall eslint eslint-config-prettier eslint-plugin-prettier @eslint/eslintrc @eslint/js
```

### Remove prettier
```bash
rm .prettierrc
```
```bash
npm uninstall prettier
```


## Clean up package.json
```bash
cat <<EOF > package.json
{
  "name": "server-logging-example",
  "version": "0.0.1",
  "scripts": {
    "build": "nest build",
    "start:dev": "nest start --watch",
    "start:prod": "node dist/main"
  },
  "dependencies": {
    "@nestjs/common": "^11.0.1",
    "@nestjs/core": "^11.0.1",
    "@nestjs/platform-express": "^11.0.1",
    "reflect-metadata": "^0.2.2",
    "rxjs": "^7.8.1"
  },
  "devDependencies": {
    "@nestjs/cli": "^11.0.0",
    "@nestjs/schematics": "^11.0.0",
    "@swc/cli": "^0.6.0",
    "@swc/core": "^1.10.7",
    "@types/express": "^5.0.0",
    "@types/node": "^22.10.7",
    "globals": "^16.0.0",
    "source-map-support": "^0.5.21",
    "supertest": "^7.0.0",
    "ts-loader": "^9.5.2",
    "ts-node": "^10.9.2",
    "tsconfig-paths": "^4.2.0",
    "typescript": "^5.7.3",
    "typescript-eslint": "^8.20.0"
  }
}
EOF
```

## Clean up node_modules
```bash
npm clean-install
```


# Done!
You are at the same step as the initial commit of this project!
