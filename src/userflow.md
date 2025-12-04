# Chattada Sangham - User Flow & Stories

## App Overview
Chattada Sangham is a premium matrimony PWA for the Telugu community featuring verified onboarding, Smart Sangam Discovery, interactive family lineage visualization, and family-first connection features with mutual interest notifications.

---

## Design System

### Color Palette
- **Cream Background:** `#F5F3F0`
- **Gold Accent:** `#D4AF37`
- **Dark Text:** `#1A1A1A`
- **Mid Gray:** `#6B6B6B`
- **Light Border:** `#E8E6E3`

### Typography
- **Headers:** Letter-spacing `0.3em` for elegance
- **Body:** Default system typography with proper hierarchy
- **Emphasis:** Medium weight (500) for headings, buttons, labels

### Spacing Scale
- 12px (3), 16px (4), 20px (5), 24px (6), 28px (7), 32px (8)

---

## User Journey

### 1. First Launch Experience

#### User Story 1.1: Splash Screen
**As a** new user  
**I want to** see an elegant branded splash screen  
**So that** I feel welcomed and understand the app's premium positioning

**Flow:**
1. App opens with Chattada Sangham logo
2. Cream background with gold accents
3. 2.5 second display duration
4. Smooth transition to onboarding

**Acceptance Criteria:**
- Logo centered and prominent
- Brand colors displayed consistently
- No loading indicators (seamless experience)
- Auto-advances after 2.5s

---

#### User Story 1.2: Onboarding Carousel
**As a** new user  
**I want to** understand the app's key features through visual onboarding  
**So that** I know what value the app provides before signing up

**Flow:**
1. Three onboarding screens with illustrations
2. Swipe/navigate between screens
3. Skip option available
4. "Get Started" button on final screen

**Screens:**
- **Screen 1:** Digital Gatepass - Verified profiles with Gothram, Nakshatram, Native Place
- **Screen 2:** Smart Discovery - Find compatible matches through intelligent filtering
- **Screen 3:** Family First - Connect families through Vamsha Vriksham (lineage tree)

**Acceptance Criteria:**
- Smooth swipe transitions
- Progress indicators
- Skip button visible on all screens
- Clear CTA on final screen

---

### 2. Authentication & Onboarding

#### User Story 2.1: OTP-Based Sign Up
**As a** new user  
**I want to** sign up using my phone number with OTP verification  
**So that** my identity is verified and account is secure

**Flow:**
1. Enter 10-digit phone number
2. Receive OTP via SMS
3. Enter 6-digit OTP
4. Auto-verifies and proceeds to profile creation

**Acceptance Criteria:**
- Phone number validation (10 digits)
- OTP sent within 30 seconds
- OTP field auto-focuses
- Error handling for invalid OTP
- Resend OTP option after 60s

---

#### User Story 2.2: Profile Creation - 5 Step Process
**As a** new user  
**I want to** create my matrimony profile in structured steps  
**So that** I provide all necessary information without feeling overwhelmed

**Step 1: Photo Upload**
- Upload primary profile photo
- Image preview
- Crop/adjust functionality
- Skip option (can add later)

**Step 2: Basic Information**
- Full Name
- Gender (Bride/Groom)
- Date of Birth (with age auto-calculation)
- Height (dropdown)

**Step 3: Community Details (Digital Gatepass)**
- Gothram (dropdown with search)
- Nakshatram (dropdown with 27 options)
- Native Place (city/village)
- Current Location

**Step 4: Professional Background**
- Education Level (dropdown)
- College/University
- Profession/Occupation
- Company Name
- Years of Experience

**Step 5: Family Information**
- Father's Name
- Mother's Name
- Siblings count
- Family Type (Nuclear/Joint)
- Family Values (Traditional/Moderate/Liberal)

**Acceptance Criteria:**
- Progress bar showing 1/5, 2/5, etc.
- Back navigation available
- Form validation on each step
- Save draft functionality
- Auto-save every 30 seconds
- All mandatory fields marked with *

---

### 3. Main App Navigation

#### User Story 3.1: Bottom Navigation
**As a** user  
**I want to** easily navigate between main app sections  
**So that** I can access different features quickly

**Tabs:**
1. **Home** (HomeIcon) - Mutual matches only
2. **Discover** (Compass) - Browse new profiles
3. **Messages** (MessageCircle) - Conversations with notification badge
4. **Tree** (GitBranch) - Family lineage visualization
5. **Profile** (User) - My profile settings

**Acceptance Criteria:**
- Active tab highlighted in gold (#D4AF37)
- Scale animation on tap (1.1x)
- Tab labels clearly visible
- Notification badge on Messages tab
- Persistent across app usage

---

### 4. Home Tab - Mutual Matches (Subham Connections)

#### User Story 4.1: View Mutual Matches Grid
**As a** user  
**I want to** see all my mutual interest matches in a grid layout  
**So that** I can browse and view profiles of people interested in me

**Flow:**
1. Navigate to Home tab
2. See header showing "X Subham" matches count
3. Scroll through responsive grid (1/2/3 columns)
4. Each card shows:
   - Profile photo with hover zoom effect
   - "Matched X days ago" badge
   - Verified badge (if applicable)
   - Name, Age, Location
   - Education icon + degree
   - Profession icon + job title
   - "View Full Profile" button

**Acceptance Criteria:**
- Grid responsive: 1 col (mobile), 2 cols (tablet), 3 cols (desktop)
- Card hover: Lifts 8px upward
- Image hover: Scales 105% smoothly
- Verified badge shows gold background
- All text truncates with ellipsis if too long
- Smooth 400ms animations

---

#### User Story 4.2: View Full Matched Profile
**As a** user  
**I want to** view complete profile details of my matches  
**So that** I can learn everything about them before messaging

**Flow:**
1. Click any match card
2. Modal opens with full profile:
   - Large header image
   - Name, Age, Location
   - About section (bio)
   - Professional Background (Education, Profession)
   - Heritage & Details (Height, Gothram, Nakshatram, Native Place)
   - "View Lineage" button
   - "Share Profile" button
3. Close modal with X button or backdrop click

**Acceptance Criteria:**
- Modal opens with scale animation
- All community details visible (mutual match unlocks)
- Smooth scroll on long content
- Max height: 90vh with scrolling
- Close on backdrop click or X button
- Share profile functionality

---

#### User Story 4.3: View Family Lineage (Vamsha Vriksham)
**As a** user  
**I want to** view the family lineage of my matches  
**So that** I can understand their family background and heritage

**Flow:**
1. From profile modal, click "View Lineage"
2. Lineage modal opens showing:
   - Grandparents (Paternal & Maternal)
   - Parents (Father & Mother with occupations)
   - Current Profile (highlighted with gold border)
   - Each entry shows: Name, Location/Occupation
   - Gothram, Nakshatram, Native Place in highlighted section
3. Notice: "Full Lineage Unlocked - Available due to mutual Subham connection"

**Acceptance Criteria:**
- 3-tier family tree display
- Current profile highlighted in gold
- All names and details clearly visible (not blurred)
- Proper hierarchy: Grandparents → Parents → Profile
- Community icons (Shield, Star, MapPin) for details
- Close button in top-right

---

### 5. Discover Tab - FB Dating Style Interface

#### User Story 5.1: Browse New Profiles
**As a** user  
**I want to** discover new potential matches one at a time  
**So that** I can focus on each profile individually and make thoughtful decisions

**Flow:**
1. Navigate to Discover tab
2. See header with "X profiles available" count
3. View single profile card:
   - Large portrait photo (3:4 ratio)
   - Verified badge (top-right)
   - Name, Age, Location (overlay on image)
   - Education info with icon badge
   - Profession info with icon badge
4. Read basic information ONLY (privacy until matched)
5. Make decision using action buttons

**Acceptance Criteria:**
- One card at a time (no grid)
- Card max-width: 28rem (448px)
- Centered layout on desktop
- No bio, interests, or heritage details shown
- Only basic: Name, Age, Location, Education, Profession
- Clean, minimal interface
- Desktop: No CTA cutoff (proper height calculations)

---

#### User Story 5.2: Express Interest or Pass
**As a** user  
**I want to** indicate interest or pass on profiles using clear buttons  
**So that** I can make quick decisions without swipe gestures

**Flow:**
1. View profile card
2. Click one of two buttons:
   - **Not Interested:** Gray button with X icon (left)
   - **Interested:** Gold button with Heart icon (right)
3. Card exits with directional animation
4. Next profile appears
5. Repeat until no profiles remain

**Acceptance Criteria:**
- Buttons side-by-side, equal width
- Not Interested: White bg, gray border, gray X icon
- Interested: Gold bg, filled heart, gold shadow
- Exit animation: Slide left (pass) or right (interested)
- Active state: Scale 0.97x
- Disabled during animation
- 400ms transition duration
- Next profile enters with scale + fade

---

#### User Story 5.3: Apply Filters
**As a** user  
**I want to** filter discovery profiles by preferences  
**So that** I see more relevant matches

**Flow:**
1. Click "Filters" button in header
2. Filter panel slides down
3. Adjust filters:
   - Age Range (min-max sliders)
   - Location (dropdown)
   - Education (dropdown)
   - Gothram (dropdown)
4. Click "Apply Filters"
5. Profiles refresh based on criteria

**Acceptance Criteria:**
- Smooth height animation on panel
- Age inputs: Number type, 18-50 range
- Dropdowns styled consistently
- Reset filters option
- Apply button: Black bg, white text
- Panel collapsible

---

### 6. Messages Tab

#### User Story 6.1: View Conversations
**As a** user  
**I want to** see all my active conversations  
**So that** I can chat with my matches

**Flow:**
1. Navigate to Messages tab
2. See list of conversations with matched profiles
3. Each conversation shows:
   - Profile photo
   - Name
   - Last message preview
   - Timestamp
   - Unread indicator
4. Click to open chat

**Acceptance Criteria:**
- Sorted by most recent first
- Notification badge shows unread count
- Online status indicator
- Search conversations feature
- Empty state when no conversations

---

### 7. Tree Tab - Family Visualization

#### User Story 7.1: View My Family Tree
**As a** user  
**I want to** view and manage my family lineage  
**So that** I can share accurate heritage information with matches

**Flow:**
1. Navigate to Tree tab
2. See interactive family tree visualization
3. View all family members
4. Edit family member details
5. Add new family members
6. Share tree with matches

**Acceptance Criteria:**
- Visual tree layout (top-down hierarchy)
- Editable member information
- Add new members option
- Share functionality
- Privacy controls

---

### 8. Profile Tab - Account Management

#### User Story 8.1: View & Edit My Profile
**As a** user  
**I want to** view and edit my profile information  
**So that** I can keep my details accurate and up-to-date

**Flow:**
1. Navigate to Profile tab
2. See all profile sections:
   - Basic Information
   - Community Details
   - Professional Background
   - Family Information
   - Photos
3. Click edit icon on any section
4. Update information
5. Save changes

**Acceptance Criteria:**
- All information clearly organized
- Edit icons visible on each section
- Form validation on save
- Success confirmation
- Profile completion percentage shown

---

#### User Story 8.2: Manage Privacy Settings
**As a** user  
**I want to** control who can see my profile details  
**So that** I maintain privacy until mutual interest

**Settings:**
- Profile visibility (Public/Private/Matched Only)
- Photo visibility (Everyone/Matched Only)
- Last seen status
- Read receipts
- Block list management

**Acceptance Criteria:**
- Toggle switches for binary options
- Dropdowns for multi-choice
- Changes save immediately
- Clear explanations for each setting

---

#### User Story 8.3: Logout
**As a** user  
**I want to** securely logout from my account  
**So that** my information remains private

**Flow:**
1. Scroll to bottom of Profile tab
2. Click "Logout" button
3. Confirmation dialog appears
4. Confirm logout
5. Redirected to auth screen

**Acceptance Criteria:**
- Logout button clearly visible
- Confirmation required
- Session cleared completely
- Redirects to login screen

---

## Premium Features (Sangam Prime)

### User Story 9.1: Upgrade to Prime
**As a** user  
**I want to** upgrade to Sangam Prime  
**So that** I can access unlimited features

**Prime Benefits:**
- Unlimited daily interests
- See who liked you
- Advanced filters
- Priority customer support
- Verified badge
- Highlighted profile in search

**Flow:**
1. See "Upgrade to Prime" prompts throughout app
2. Click to view pricing plans
3. Select plan (Monthly/Quarterly/Annual)
4. Complete payment
5. Instant activation

**Acceptance Criteria:**
- Multiple touchpoints for upgrade
- Clear benefit comparison
- Secure payment integration
- Instant feature unlock
- Receipt/confirmation email

---

## Responsive Design Guidelines

### Mobile (< 768px)
- Single column layouts
- Bottom navigation always visible
- Full-width cards
- Touch-friendly buttons (min 44px height)

### Tablet (768px - 1024px)
- 2-column grids
- Larger cards with more details
- Optimized spacing

### Desktop (> 1024px)
- 3-column grids
- Max-width containers (1152px)
- Centered layouts
- Hover states on all interactive elements
- No CTA cutoff issues
- Proper height calculations for modals

---

## Animation & Motion Design

### Principles
- **Duration:** 200-400ms for UI elements
- **Easing:** `[0.4, 0, 0.2, 1]` (natural acceleration)
- **Scale:** 0.92-1.0 for entries, 0.97-0.98 for active states
- **Direction:** Left/Right for decisions, Up for lifts

### Key Animations
1. **Card Entry:** Scale 0.92 → 1.0, Opacity 0 → 1, Y: 20 → 0
2. **Card Exit:** X: ±300px, Scale → 0.9 based on action
3. **Hover Lift:** Y: 0 → -8px (matches grid)
4. **Image Zoom:** Scale 1.0 → 1.05 on hover
5. **Button Active:** Scale → 0.97-0.98

---

## Accessibility Standards

### Color Contrast
- All text meets WCAG AA standards
- Dark text (#1A1A1A) on cream bg (#F5F3F0): 8.2:1
- Gold accents used for emphasis, not primary text

### Touch Targets
- Minimum 44×44px for all tappable elements
- Adequate spacing between interactive elements

### Focus States
- Visible focus rings on all inputs
- Keyboard navigation supported
- Logical tab order

### Screen Readers
- Proper ARIA labels
- Semantic HTML structure
- Alt text on all images

---

## Performance Targets

### Loading
- Initial load: < 3s
- Route transitions: < 200ms
- Image lazy loading
- Progressive enhancement

### Offline Support (PWA)
- Service worker caching
- Offline viewing of matched profiles
- Queue actions for sync

### Optimization
- Hardware-accelerated animations (transform, opacity)
- Debounced search inputs
- Virtual scrolling for long lists
- Image optimization (WebP format)

---

## Error Handling

### Network Errors
- Retry mechanism
- Clear error messages
- Offline mode indicator
- Queue failed actions

### Validation Errors
- Inline error messages
- Highlight invalid fields
- Clear error state on correction

### System Errors
- Graceful degradation
- Error boundary components
- User-friendly error messages
- Support contact option

---

## Success Metrics

### User Engagement
- Daily active users
- Time spent in app
- Profiles viewed per session
- Match acceptance rate

### Conversion
- Sign-up completion rate
- Profile completion rate
- Premium subscription rate
- Message response rate

### Quality
- Verified profile percentage
- Report/block rate (should be low)
- User satisfaction (NPS)
- Profile accuracy

---

## Future Enhancements

### Phase 2 Features
- Video profiles
- Horoscope matching
- In-app video calls
- Family verification system
- AI-powered match suggestions
- Regional language support

### Phase 3 Features
- Wedding planning integration
- Astrology consultation booking
- Community events
- Success stories section

---

*Last Updated: December 2024*
*Version: 2.0*
