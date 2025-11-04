# Contact Form Setup for GitHub Pages

The contact form has been updated to work with GitHub Pages using multiple options:

## 🚀 Ready to Use Options:

### 1. **Email Link** (Works Immediately)
- Clicking "Send Email" opens the user's default email client
- Pre-fills subject and recipient
- **No setup required!**

### 2. **Social Media Links** (Works Immediately)
- Direct links to Twitter and Instagram
- Update the URLs in `index.html` with your actual social media handles
- **No setup required!**

## 📧 Form Option (Requires 5-minute setup):

### **Option A: Formspree (Recommended - Free)**

1. Go to [formspree.io](https://formspree.io)
2. Sign up for free account
3. Create a new form
4. Copy your form ID (looks like `xpzgkdol`)
5. In `index.html`, replace `YOUR_FORM_ID` with your actual ID:
   ```html
   <form action="https://formspree.io/f/xpzgkdol" method="POST">
   ```
6. That's it! Forms will be sent to your email.

### **Option B: Netlify Forms**
If you deploy to Netlify instead of GitHub Pages:
1. Add `netlify` attribute to the form
2. Forms work automatically

### **Option C: EmailJS**
1. Sign up at [emailjs.com](https://emailjs.com)
2. Follow their JavaScript integration guide
3. More complex but more customizable

## 🎯 What Each Option Provides:

| Option | Setup Time | Features | Cost |
|--------|------------|----------|------|
| Email Link | 0 minutes | Opens email client | Free |
| Social Media | 1 minute | Direct messaging | Free |
| Formspree | 5 minutes | Web form + email delivery | Free (50 forms/month) |
| Netlify | 0 minutes* | Web form + email delivery | Free |
| EmailJS | 15 minutes | Custom email templates | Free (200 emails/month) |

*Only if deploying to Netlify

## 🔧 Current Status:
- ✅ Email link works immediately
- ✅ Social media links work immediately  
- ⚠️ Form needs Formspree setup (or will show error)

## 📝 Quick Formspree Setup:
1. Visit [formspree.io](https://formspree.io)
2. Enter your email and create form
3. Replace `YOUR_FORM_ID` in the HTML
4. Done! Contact form will work perfectly.

The site will work great even without setting up the form - users can still contact you via email and social media!