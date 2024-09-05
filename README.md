# SynnexTial

> **SynnexTial** is a collaborative document management platform built to enhance teamwork and productivity. It allows users to create, edit, and collaborate on documents in real-time within shared workspaces. This powerful and intuitive platform is perfect for teams looking to streamline their workflow and keep everyone on the same page.

## Table of Contents

- [About the Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About the Project

SynnexTial is designed to solve the common challenges teams face when managing documents and collaborating in real-time. Whether you're working on technical documentation, project notes, or brainstorming ideas, SynnexTial offers a robust and user-friendly solution for real-time editing, workspace organization, and user management.

The project integrates powerful rich-text editing capabilities and workspace-based document categorization. Built with scalability and modern UI/UX principles in mind, SynnexTial ensures efficient collaboration, version control, and seamless synchronization.

## Key Features

- **Real-time Collaborative Editing**: Edit documents live with teammates, and changes appear instantly for all users.
- **Rich Text Editor**: Advanced editor tools like headings, lists, checklists, code blocks, and more.
- **Document Versioning**: Automatically keep track of document changes with version history.
- **Workspaces**: Organize your documents into workspaces for different teams or projects.
- **User Access Management**: Control who can view or edit documents within each workspace.
- **Firebase Integration**: Real-time synchronization of document data and user activities.
- **Cross-device Support**: Seamlessly access your documents from any device.

## Tech Stack

SynnexTial is built using the latest technologies to ensure scalability, performance, and a seamless user experience.

- **Frontend**: 
  - Next.js (React Framework)
  - Tailwind CSS (Responsive UI Styling)
  - Editor.js (Rich Text Editor)
  
- **Backend**: 
  - Firebase Firestore (Real-time Database)
  - Firebase Authentication (User Management)
  
- **Deployment**:
  - Vercel (Frontend Hosting)
  - Firebase Functions (Backend Logic)

## Installation

Follow these steps to set up the project locally.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/axshatInd/synnexTial.git
   cd synnexTial
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Firebase**:
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Add your Firebase credentials to `.env.local`:
     ```bash
     NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
     NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
     ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Access the application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## Usage

### Creating a Workspace
1. Navigate to the **Workspaces** section.
2. Click on the **+** icon to create a new workspace.
3. Name your workspace and invite collaborators.

### Document Collaboration
1. Within a workspace, click on the **+** icon to create a new document.
2. Use the **Rich Text Editor** to write and format content.
3. Collaborators can view and edit the document in real-time.

### Saving and Version Control
1. Documents are saved automatically after every edit.
2. Use the document history feature to revert to previous versions or view the changelog.

## Contributing

We welcome contributions to improve **SynnexTial**. To contribute:

1. Fork the repository.
2. Create a new branch for your feature/bugfix:
   ```bash
   git checkout -b feature/my-new-feature
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Add a new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/my-new-feature
   ```
5. Create a Pull Request describing your changes.

## Contact

For inquiries, suggestions, or contributions, feel free to contact us.

- **Project Maintainer**: [Akshat Saini](https://github.com/axshatInd)
- **Email**: axshat.ind@gmail.com

---
