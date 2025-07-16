# ✅ Git Verified Commit Setup Guide (GPG Signing)

This guide helps you configure **GPG signed and verified commits** in Git using **VS Code terminal** (or any terminal).

---

## 🔧 Step 1: Generate a GPG Key

Open your terminal and run:

```bash
gpg --full-generate-key
```

- Choose: `1` (RSA and RSA)
- Key size: `4096`
- Expiry: your choice (e.g., `0` = never expires)
- Enter your **GitHub email** when prompted

### Find your GPG Key ID:

```bash
gpg --list-secret-keys --keyid-format LONG
```

Example output:

```
sec   rsa4096/ABCDEF1234567890 2025-01-01 [SC]
```

Copy the key ID after the slash (`ABCDEF1234567890`).

---

## ⚙️ Step 2: Configure Git to Use Your GPG Key

Set Git to use the signing key and sign all commits by default:

```bash
git config --global user.signingkey ABCDEF1234567890
git config --global commit.gpgSign true
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

---

## 🔐 Step 3: Add the GPG Key to GitHub

Export your GPG public key:

```bash
gpg --armor --export ABCDEF1234567890
```

1. Copy the output.
2. Go to **GitHub** → **Settings** → **SSH and GPG keys** → **New GPG key**
3. Paste your key and save.

---

## ✅ Step 4: Make and Push Signed Commits

Now you're ready to commit with signature:

```bash
git commit -S -m "Your signed commit message"
git push
```

If you've enabled signing globally, you can just use:

```bash
git commit -m "Your commit"
```

> The `-S` flag manually signs the commit. `commit.gpgSign = true` signs all commits by default.

---

## 🧪 Step 5: Verify on GitHub

1. Push your commit
2. Go to your repo on GitHub
3. Navigate to the **Commits** tab
4. Look for the **green Verified badge** ✅ next to your commit message

---

## 🛠️ Troubleshooting Tips

- If you're on **Linux or macOS**, you may need this in your shell config (`.bashrc`, `.zshrc`, etc.):

```bash
export GPG_TTY=$(tty)
```

- If Git can't find GPG, install it:
  - Windows: [Gpg4win](https://gpg4win.org/)
  - macOS: `brew install gnupg`
  - Ubuntu/Debian: `sudo apt install gnupg`

---

## 📌 Check Your Global Git Config

```bash
git config --global --get commit.gpgSign
git config --global --get user.signingkey
```

---

## 🔁 Undo or Disable Auto-Signing (Optional)

To turn off auto-signing:

```bash
git config --global --unset commit.gpgSign
```

---

## 🧼 Bonus: View Signed Commits Locally

```bash
git log --show-signature
```

This shows whether past commits are signed and valid.

---

Happy coding with verified commits! 🔐✅
