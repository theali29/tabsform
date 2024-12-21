const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
app.get('/')

// require('dotenv').config()
// import express from 'express' //creating server
// import {
//   initialize,
//   session,
//   serializeUser,
//   deserializeUser,
//   use,
//   authenticate,
// } from 'passport' //authentication
// import cookiesession from 'cookie-session' //
// import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
// const app = express()
// //Configue Cookie session
// app.use(
//   cookiesession({
//     name: 'session',
//     keys: [process.env.COOKIE_SECRET],
//     maxAge: 24 * 60 * 60 * 1000,
//     secure: process.env.NODE_env === 'production',
//     sameSite: 'Strict',
//     httpOnly: true,
//   })
// )

// //Initialize passport
// app.use(initialize())
// app.use(session())

// //passport serialization
// serializeUser((user, done) => done(null, user))
// deserializeUser((user, done) => (null, user))
// use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL:
//         process.env.NODE_ENV === 'production'
//           ? 'https://tabsform.netlify.app/auth/google/callback'
//           : 'http://localhost:3000/auth/google/callback',
//     },
//     (accessToken, refreshToken, profile, done) => {
//       return done(null, profile)
//     }
//   )
// )
// //Routes
// app.get(
//   '/auth/google',
//   passport.authenticate('google', { scope: ['profile', 'email'] })
// )

// //Google Auth Route

// app.get(
//   '/auth/google/callback',
//   authenticate('google', { failureRedirect: '/' }),
//   (req, res) => {
//     res.redirect('/')
//   }
// )
// //Logout route
// app.get('/logout', (req, res) => {
//   req.session = null
//   req.logout((err) => {
//     if (err) {
//       console.error('Logout error:', err)
//       return res.status(500).send('Error logging out')
//     }
//     res.redirect('/')
//   })
// })

// //Test Protected Route
// app.get('/', (req, res) => {
//   if (req.user) {
//     res.send(`Welcome, ${req.user.displayName}`)
//   } else {
//     res.send('Please log in')
//   }
// })

// //Error handling middleware

// app.use((err, req, res, next) => {
//   console.error('Server error:', err)
//   res.status(500).send('Internal Server Error')
// })

// //Start server
// const PORT = process.env.PORT || 3000
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`)
// })

// app.get(
//   '/auth/google/callback',
//   authenticate('google', { failureRedirect: '/' }),
//   (req, res) => {
//     console.log('User:', req.user)
//     res.redirect('/')
//   }
// )
// const cors = require('cors')
// app.use(
//   cors({
//     origin: ['http://localhost:3000', 'https://tabsform.netlify.app'],
//     credentials: true,
//   })
// )
