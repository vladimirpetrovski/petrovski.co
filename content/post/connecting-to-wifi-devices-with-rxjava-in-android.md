---
authors: ["Vladimir Petrovski"]
title: "Connecting to Wi-Fi Devices With Rxjava in Android"
date: 2020-07-22
categories: ["rxjava", "wifi", "android"]
images: ["connecting-to-wifi-devices-with-rxjava-in-android.png"]
---

Last year's Android 10 announcement came with many new features like Gesture navigation, Dark theme, Location control and [more](https://www.android.com/android-10/). If your apps haven't yet been migrated to the newest version, go ahead and do it! There have also been many changes at the API level, so check [this link](https://developer.android.com/about/versions/10/migration) before switching to Android 10.

Well, enough announcements about Android 10 since Android 11 Beta is already out. 🤭

IoT (Internet of Things) is gaining popularity these days and working with Wi-Fi on Android can be challenging. Using BLE Technology is almost the same thing. When you just think that there are hundreds of different types of devices, different versions of Android, hardware, and so on, it's already getting tougher. Testing of such use cases can be a bugger. Thanks to the open-source contributors and Google itself, we have lots of new test frameworks and stable APIs.
If you are interested in BLE, there are some good articles written about it.

<div class="dots">. . .</div>  

In this article, let's look at the three most important parts of using Wi-FI APIs: **_Scanning for Wi-Fi devices_**, **_Connecting to a particular device_**, **_Communicating with a device_** and **_Disconnecting from a device using RxJava_**.

## 🚀 Setup
To set up the app in a state where all these parts work flawlessly, by being able to scan and connect to the Wi-Fi devices without a problem, we need to have some permissions and services allowed.

> We must request for location permissions, enable the Wi-Fi Adapter and enable the Location Services, **_otherwise might not work_**.

Before accessing any of the code below, we should add these checks:

* **Enabling location permissions**  
On Marshmallow devices, we must request for location permission - `Manifest.permission.ACCESS_FINE_LOCATION`. For that purpose, I usually use the [PermissionDispatcher library](https://github.com/permissions-dispatcher/PermissionsDispatcher), but there many other libraries you can use (or just write your own code using the [Android docs](https://developer.android.com/training/permissions/requesting)).

* **Enabling Wi-Fi adapter**  
Here you can check if the Wi-Fi adapter is enabled and force the user to enable it before continuing to the next step. There are other options where you can enable it from the code directly, but I don't recommend it, as you are not letting the user know that you are enabling the Wi-Fi adapter. And it no longer works on Android 10. 😒

  <script src="https://gist.github.com/vladimirpetrovski/e292bad7f1f956810b047ea03e1a925b.js"></script>

* **Enabling Location Services**  
For this purpose, I'm using Google Play Services library. It shows a popup where the user can enable these services by clicking accept. Just add this dependency in your project.

  ```
  implementation 'com.google.android.gms:play-services-location:17.0.0'
  ```

  The `onSuccessCallback` is called only if the user clicks accept.

  <script src="https://gist.github.com/vladimirpetrovski/14b6c6160aa5f7042537bb69a81e772d.js"></script>

  In Kotlin you can use it like this:

  ```
  checkLocationSettings {
      // the user has allowed the locating services.
  }
  ```
  We now have all these services and permissions enabled, and we can continue communicating with the device.

### 🔎 1. Scanning for Wi-Fi devices
Scanning for a device is very simple. In order to wrap the broadcast receiver so it becomes reactive, we use the `Completable.create` method from RxJava.

After registering a broadcast receiver with a filter `SCAN_RESULTS_AVAILABLE_ACTION`, just make sure to filter out the right SSID from the result you are looking for and emit `onComplete` if the SSID is right. Otherwise emmit `tryOnError`. (We use `tryOnError`, just because if the Rx flow is cancelled before the scanning is finished, we don't get the `UndeliverableException`).

<script src="https://gist.github.com/vladimirpetrovski/fa4d5ed051a12186eb8c848f5804ecf1.js"></script>

### ❤️ 2. Connecting to a device
Now, after scanning has been done successfully, we can connect to the device as we know that it is nearby.

#### For older APIs from Android 9 and below:
We need to wrap the broadcast receiver as we did before with `Completable.create` and register the callback with a filter for listening network changes `WifiManager.NETWORK_STATE_CHANGED_ACTION`. After calling [`WifiManager#addNetwork`](https://developer.android.com/reference/android/net/wifi/WifiManager#addNetwork(android.net.wifi.WifiConfiguration)) and then [`WifiManager#enableNetwork`](https://developer.android.com/reference/android/net/wifi/WifiManager#enableNetwork(int,%20boolean), the broadcast receiver receives a response when the connection is being changed, so we need to check the right SSID as long as the device connects. We finish it by calling `onComplete`.

For further communication with the device using REST API, socket or whatever the device supports, we need to have this Network instance accessible. We can return the Network instance like this:

<script src="https://gist.github.com/vladimirpetrovski/db32ca9dfe370b035a231ea8f51d299e.js"></script>

<script src="https://gist.github.com/vladimirpetrovski/aec62d79225732fa9d554b4c5fc3d0c0.js"></script>

#### For newer APIs running Android 10 and later:
By implementing the `WifiConnectUseCase` you will provide support for devices on Android 10 and above. Just make sure you have `targedSdkVersion 29` in the app's `build.gradle` file.

This method is similar to the previous one, but instead of a broadcast receiver, it uses callbacks. The only difference here is that after calling a [`ConnectivityManager#requestNetwork`](https://developer.android.com/reference/android/net/ConnectivityManager#requestNetwork(android.net.NetworkRequest,%20android.net.ConnectivityManager.NetworkCallback)), it triggers a popup where the user should agree to be connected to the given Wi-Fi network.

Getting a response `onAvailable` in the callback means that the app is successfully connected to the device. If we get a `onUnavailable`, it usually means that the user has denied the popup.

<script src="https://gist.github.com/vladimirpetrovski/9b75656d0aff82a23f199cee7dd13762.js"></script>

So, before calling any of these use cases make sure you check the current Android SDK version like this:

```
if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q){
    // use WiFiConnectUseCase.kt
} else {
    // use WiFiConnectLegacyUseCase.kt
}
```

### 📡 3. Communicating with a device
Let's say the device doesn't provide an internet connection and your phone has LTE ON. That means your phone will still be connected to the Wi-Fi device, but all the requests will go through the LTE channel even though you are connected to the right device.

> _You must bind the network after a successful connection to make sure communication stays on the right channel._

That is why you need to explicitly use [`ConnectivityManager#bindProcessToNetwork(network)`](https://developer.android.com/reference/android/net/ConnectivityManager#bindProcessToNetwork(android.net.Network)) in order to make sure your communication stays on the right process.

Binding to a network:

<script src="https://gist.github.com/vladimirpetrovski/c0482830d201db48d4e85f74686e1a4f.js"></script>

When you are done communicating, unbind from the network by passing a `null` value. This action lets the device to decide for itself which network to use as a primary internet connection (usually, the mobile-LTE network is faster to connect to). If the phone is not using LTE, it needs a couple of seconds to reconnect to the original Wi-Fi which was using before.

<script src="https://gist.github.com/vladimirpetrovski/b00b24b184b0153bfc4c30de5ead182a.js"></script>

#### Accessing the device
If your device supports REST API, you can simply use Retrofit to communicate with the device as you did before with any other REST API.

Usually, the API URL will be something like a raw IP, for example, https://192.168.1.20. Newer versions of Android will reject these calls and you will get a **ERR_CLEARTEXT_NOT_PERMITTED** error, as these calls are considered not safe. In order to **fix this, follow [this article](https://medium.com/@jorgekg3/how-enable-clear-text-traffic-on-android-9-ad56603fb17d)**.

### 💔 4. Disconnecting from a device
There are two types of disconnecting from a Wi-Fi connection, depending on whether it is the new (Android 10 and above) or the old API.

> _For the newer API (Android 10) pass the networkCallback you want to unregister, that you got from the [WiFiConnectUseCase](https://gist.github.com/vladimirpetrovski/9b75656d0aff82a23f199cee7dd13762):_

```
connectivityManager.unregisterNetworkCallback(networkCallback)
```

> _For older APIs (below Android 10), just pass thenetworkIdyou want to remove, that you got from the [WiFiConnectLegacyUseCase](https://gist.github.com/vladimirpetrovski/aec62d79225732fa9d554b4c5fc3d0c0):_

```
wifiManager.removeNetwork(networkId)
```

Here is the code, which supports both cases:

<script src="https://gist.github.com/vladimirpetrovski/000d2bd7ecc7a9abe828a060cf8decbd.js"></script>

### Extra: Using it in a ViewModel
Using these use cases into a ViewModel is pretty straight forward. Hopefully, you are already familiar with the use of ViewModels and MVVM architecture.

<script src="https://gist.github.com/vladimirpetrovski/d7435d8ffea8780dc8d76c33007fa5a6.js"></script>

### 💪 Conclusion
Working on Wi-Fi devices can give us some hard time and it takes a lot of patience. Thankfully, the APIs these days are more descriptive, easy to use and the [Android developer's documentation](https://developer.android.com/docs) is well written too.

<div class="dots">. . .</div>

Please feel free to leave a comment below. If you have any issues with the code, I'd be happy to help. And, if you are not using  RxJava in your case, there is a great article on how to [connect to devices using Android 10](https://blog.ostebaronen.dk/2019/11/android-10-wifi.html).

Cheers! 🍻
