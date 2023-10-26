# Kinde Starter Kit - React Native 0.7x

The Kinde Starter Kit for React Native SDK 0.7x.

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com) [![Kinde Docs](https://img.shields.io/badge/Kinde-Docs-eee?style=flat-square)](https://kinde.com/docs/developer-tools) [![Kinde Community](https://img.shields.io/badge/Kinde-Community-eee?style=flat-square)](https://thekindecommunity.slack.com)

## Register an account on Kinde

To get started set up an account on [Kinde](https://app.kinde.com/register).

## Development

### Prerequisites

- NodeJS version 16.x or higher
- Ruby version 2.7.5 or higher

Follow [the installation instructions for your chosen OS](https://reactnative.dev/docs/environment-setup) to install dependencies

### Initial set up


1. Clone the repository to your machine:
```shell
git clone https://github.com/kinde-starter-kits/kinde-react-native-starter-kit-0-7x.git
```
2. Go into the project:
```shell
cd kinde-react-native-starter-kit-0-7x
```
3. Install the dependencies:
```shell
npm install

# [iOS] Install iOS native dependencies
cd ios
bundle install && bundle exec pod install
```

### Setup your local environment

You should change Kinde config in the `src/components/Header.tsx` file:

```javascript
new KindeSDK(
  'https://your_kinde_domain.kinde.com',
  'your_schema://your_kinde_domain.kinde.com/kinde_callback',
  'your_kinde_client_id',
  'your_schema://your_kinde_domain.kinde.com/kinde_callback',
);
```

### Set your Callback and Logout URLs

Your user will be redirected to Kinde to authenticate. After they have logged in or registered they will be redirected back to your NextJS application.

You need to specify in Kinde which url you would like your user to be redirected to in order to authenticate your app.

On the App Keys page set `Allowed callback URLs` to your deep linking

> Important! This is required for your users to successfully log in to your app.

You will also need to set the url they will be redirected to upon logout. Set the `Allowed logout redirect URLs` to your deep linking.

### Configuration Deep link

#### Android

Open `AndroidManifest.xml` and change your scheme:

```xml
<intent-filter>
	<action android:name="android.intent.action.VIEW" />
	<category android:name="android.intent.category.DEFAULT" />
	<category android:name="android.intent.category.BROWSABLE" />
	<data android:scheme="your_schema" android:host="your_kinde_domain.kinde.com" />
</intent-filter>
```
#### iOS

Please make sure you have configuration URL scheme in `Info.plist`:

```swift
...
	<key>CFBundleURLTypes</key>
	<array>
		<dict>
			<key>CFBundleTypeRole</key>
			<string>Editor</string>
			<key>CFBundleURLName</key>
			<string>your_schema</string>
			<key>CFBundleURLSchemes</key>
			<array>
				<string>your_schema</string>
			</array>
		</dict>
	</array>
...

```

### How to start?

#### Start the metro server

Run below command:

```shell
npm start --reset-cache
```

#### Start your app
```shell
# iOS
npm run ios
# or for Android
npm run android
```

## Documentation

For details on integrating this SDK into your project, head over to the [Kinde docs](https://kinde.com/docs/) and see the [React Native SDK 0.6x](https://kinde.com/docs/developer-tools/react-native-sdk) doc 👍🏼.

## General Tips

If you got the error `'value' is unavailable: introduced in iOS 12.0` when trying to build the app, you can follow the below steps to fix that:

1. In your Xcode project navigator, select Pods.
2. Under Targets, select React-Codegen
3. Set the window to Build Settings
4. Under Deployment, set iOS Deployment Target to 12.4
5. Clean project and rebuild: Product > Clean Build Folder, Product > Build

![screenshot](./assets/image.png)
## Publishing

The core team handles publishing.

## Contributing

Please refer to Kinde’s [contributing guidelines](https://github.com/kinde-oss/.github/blob/489e2ca9c3307c2b2e098a885e22f2239116394a/CONTRIBUTING.md).

## License

By contributing to Kinde, you agree that your contributions will be licensed under its MIT License.