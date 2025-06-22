# Hind LMS Portal

A unified Learning Management System portal that consolidates Student, Faculty, and Admin interfaces into a single, role-aware application.

## 🏗️ Architecture

This is a monorepo containing:

- **`packages/portal`** - Main React application with role-based routing
- **`packages/design-system`** - Shared UI components and Tailwind preset

## 🚀 Features

### Core Features
- **Role-based Authentication** - Unified Cognito-based auth for all user types
- **Dynamic Role Routing** - Lazy-loaded routes based on user role
- **Shared Design System** - Consistent UI components across all roles
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Performance Optimized** - Code splitting and bundle optimization

### Student Portal
- Dashboard with course progress and upcoming assignments
- Course enrollment and management
- Assignment submission and tracking
- Grade viewing and analytics
- Personal profile management

### Faculty Portal
- Course creation and management
- Student roster and communication
- Assignment grading and feedback
- Gradebook with analytics
- Class scheduling and resources

### Admin Portal
- User management (students, faculty, admins)
- System-wide course management
- Analytics and reporting
- System configuration and settings
- Audit logs and monitoring

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1, TypeScript, Vite
- **Routing**: React Router 6.26.0
- **Styling**: Tailwind CSS 3.4.1
- **State Management**: Zustand + React Query
- **Authentication**: AWS Cognito
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Testing**: Vitest, Playwright
- **Build**: Vite with code splitting

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test

# Run E2E tests
npm run test:e2e

# Start Storybook
npm run storybook
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the `packages/portal` directory:

```env
VITE_COGNITO_USER_POOL_ID=your-user-pool-id
VITE_COGNITO_CLIENT_ID=your-client-id
VITE_API_BASE_URL=http://localhost:3001/api
```

### Demo Credentials

For development and testing:

- **Student**: `student@example.com` / `demo123`
- **Faculty**: `faculty@example.com` / `demo123`
- **Admin**: `admin@example.com` / `demo123`

## 🏃‍♂️ Development

### Project Structure

```
packages/
├── design-system/          # Shared UI components
│   ├── src/
│   │   ├── components/     # React components
│   │   └── utils/          # Utility functions
│   └── tailwind.preset.js  # Tailwind configuration
└── portal/                 # Main application
    ├── src/
    │   ├── components/     # Shared components
    │   ├── features/       # Feature-based modules
    │   │   ├── auth/       # Authentication
    │   │   ├── student/    # Student-specific features
    │   │   ├── faculty/    # Faculty-specific features
    │   │   ├── admin/      # Admin-specific features
    │   │   └── shared/     # Cross-role features
    │   ├── layouts/        # Layout components
    │   └── routes/         # Route definitions
    └── public/             # Static assets
```

### Adding New Features

1. **Create feature module** in appropriate role directory
2. **Add route** to the role's route configuration
3. **Update navigation** in the role's sidebar component
4. **Add tests** for new functionality

### Design System Usage

```tsx
import { Button, Card, Modal } from '@hind-lms/design-system';

// Role-aware styling
<div data-role="student" className="role-accent">
  <Button>Student Action</Button>
</div>
```

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### E2E Tests
```bash
npm run test:e2e
```

### Component Testing
```bash
npm run storybook
```

## 📊 Performance

- **Bundle Size**: < 3MB gzipped
- **Lighthouse Score**: ≥ 90
- **LCP**: < 2.5s
- **Accessibility**: ≥ 98%

## 🔒 Security

- **Authentication**: AWS Cognito with JWT tokens
- **Authorization**: Role-based access control
- **Data Protection**: Encrypted sensitive data
- **Audit Logging**: All admin actions logged

## 🚀 Deployment

### Build Production Bundle
```bash
npm run build
```

### Docker Deployment
```bash
docker build -t hind-lms-portal .
docker run -p 3000:3000 hind-lms-portal
```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Email: support@hindacademy.com
- Documentation: [Link to docs]
- Issues: [GitHub Issues]