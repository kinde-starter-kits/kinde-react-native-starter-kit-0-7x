# React Native Starter Kit

Integrate with React Native SDK to guide how to use it

## Installing dependencies

You will need Node, the React Native command line interface, a JDK, Android Studio (for Android) and Xcode (for iOS).

Follow [the installation instructions for your chosen OS](https://reactnative.dev/docs/environment-setup) to install dependencies;

## Installation

Navigate into your project's root directory and execute the bash command shown below

```shell
# Install dependencies
$ npm install

# Install iOS native dependencies
$ cd ios
$ bundle install && bundle exec pod install
```

## Setup environments

You should change Kinde config in the `.env` file:

```
KINDE_ISSUER_URL=https://your_kinde_domain.kinde.com
KINDE_POST_CALLBACK_URL=myapp://your_kinde_domain.kinde.com/kinde_callback
KINDE_POST_LOGOUT_REDIRECT_URL=myapp://your_kinde_domain.kinde.com/kinde_callback
KINDE_CLIENT_ID=your_kinde_client_id
```

### How to start?

#### Start metro server

Run below command:

```shell
$ npm start --reset-cache
```

#### Configuration Deep link

##### iOS

Please make sure you have configuration URL scheme in `Info.plist`, so app can be opened by deep link:

```swift
...
	<key>CFBundleURLTypes</key>
	<array>
		<dict>
			<key>CFBundleTypeRole</key>
			<string>Editor</string>
			<key>CFBundleURLName</key>
			<string>myapp</string>
			<key>CFBundleURLSchemes</key>
			<array>
				<string>myapp</string>
			</array>
		</dict>
	</array>
...

```

##### Android

Open `AndroidManifest.xml` and change your scheme:

```xml
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="app" android:host="your_kinde_domain.kinde.com" />
    </intent-filter>
```
