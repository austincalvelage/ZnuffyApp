# Znuffy

## Pet Adoption Platform and E-Commerce

### Objective

Create a Pet-Adoption Platform and E-Commerce as a case study to test the proposition of the solution of aiming to reduce the amount of Stray-Animals in different points of the world.

This project is starting in South-America, Paraguay, Asunción, as testing in the smallest possible scale is needed.

The fundamental reasoning behind this project is:

- Facilitate adoption of animals in a comfortable and transparent way
- Increase animal consciousness
- Make the maintenance of animals easier, cheaper and smoother.

# Lets start!

## Next.js + Tailwind CSS + Ionic Framework + Capacitor Mobile Starter

This repo is a conceptual starting point for building an iOS, Android, and Progressive Web App with Next.js, Tailwind CSS, [Ionic Framework](https://ionicframework.com/), and [Capacitor](https://capacitorjs.com/).

Next.js handles the production React app experience, Tailwind can be used to style each page of your app, Ionic Framework provides the cross-platform system controls (navigation/transitions/tabs/etc.), and then Capacitor bundles all of it up and runs it on iOS, Android, and Web with full native access.

## Usage

This project is a standard Next.js app, so the typical Next.js development process applies (`npm run dev` for browser-based development). However, there is one caveat: the app must be exported to deploy to iOS and Android, since it must run purely client-side.

To build the app, run:

```bash
npm run build
npm run export
```

All the client side files will be sent to the `./out/` directory. These files need to be copied to the native iOS and Android projects, and this is where Capacitor comes in:

```bash
npx cap sync
```

Finally, to run the app, use Capacitor 3 new awesome run command:

```
npx cap run ios
npx cap run android
```

## Livereload/Instant Refresh

To enable Livereload and Instant Refresh during development (when running `npm run dev`), find the IP address of your local interface (ex: `192.168.1.2`) and port your Next.js server is running on, and then set the server url config value to point to it in `capacitor.config.json`:

```json
{
  "server": {
    "url": "http://192.168.1.2:3000"
  }
}
```

## Caveats

Next.js routing is not really used much in this app beyond a catch-all route to render the native app shell and engage the Ionic React Router. This is primarily because Next.js routing is not set up to enable native-style transitions and history state management like the kind Ionic uses.

## What is Capacitor?

You can think of [Capacitor](https://capacitorjs.com/) as a sort of "electron for mobile" that runs standard web apps on iOS, Android, Desktop, and Web.

Capacitor provides access to Native APIs and a plugin system for building any native functionality your app needs.

Capacitor apps can also run in the browser as a Progressive Web App with the same code.

## Libraries

For the e-commerce logic, we're using [@chec/react-commercejs-hooks](https://www.npmjs.com/package/@chec/react-commercejs-hooks)
