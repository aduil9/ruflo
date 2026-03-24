# MMA App — Agent Reference Guide

**Effective Date:** March 2026
**Introduced by:** EMG (Europcar Mobility Group)
**Audience:** Customer Service Agents

---

## 1. What is the MMA App?

The **Multi-Mobility Application (MMA)** is Europcar's next-generation mobile app, developed in partnership with **Volkswagen Financial Services (VWFS)**.

### Key Objectives

- **Replace the current Europcar app** as the single booking platform
- **Offer a mobility marketplace**, including:
  - Car-sharing (MILES)
  - E-bikes & e-scooters (Dott)
  - Additional mobility services planned from 2026 onwards

---

## 2. How to Identify an MMA Booking in Greenway

MMA reservations can be identified by the following fields:

| Field | Value |
|-------|-------|
| **Direct Channel** | `GWY/BERC75/INTERNET/[date & time]/WEB` |
| **IATA Code** | `02095369 PPBA TO 4 VWFS` |

<!-- Screenshot placeholder: Greenway booking screen showing MMA identifiers -->

---

## 3. Handling Booking Modifications

If a customer requests a modification, follow one of the two options below:

### Option 1 — Customer Self-Service (Preferred)

1. Ask the customer to **cancel the booking directly in the MMA app**
2. Customer rebooks with the desired changes in the app

### Option 2 — Agent-Assisted Modification

1. Customer **cancels the original booking in the app**
2. Agent **duplicates the booking in Greenway**
3. Agent **removes IATA information** from the duplicated booking
4. Agent **completes the modified booking**
5. Customer receives an **email confirmation**
6. **Important:** Customer must still **cancel the original booking in the app**

<!-- Screenshot placeholder: Greenway duplication workflow -->

---

## 4. Handling Cancellations

| Rule | Detail |
|------|--------|
| **How to cancel** | Customer must cancel **directly via the MMA app** |
| **Cancellation fees** | **No cancellation fees** apply |
| **No-show fees** | **No no-show fees** apply |
| **Customer refuses to use app** | Redirect to **MMA Customer Support** (see Section 6) |

---

## 5. What CS Agents Should NOT Handle

**All MMA-related issues must be managed by the dedicated MMA Team.** Do not attempt to resolve the following:

- App usage issues
- Reservation problems originating in the app
- Account issues (login, registration, profile)
- Error messages within the app
- **Prepaid payments** made through the app

---

## 6. How to Forward MMA Issues

### Via the App (Customer Self-Service)

1. Customer navigates to **Account > Support & Feedback**
2. A **Salesforce case is automatically created** and assigned to **MMA – App Support**

### Via Phone (Agent Creates Case)

1. Create a **Query Case** in Salesforce
2. Add the **customer account name**
3. Change **Case Owner** to: `MMA – App Support`
4. Select the correct **Case Origin**:
   - `DE` (Germany)
   - `IE` (Ireland)
   - `ECI` (Europcar International)
5. Set **Case Reason 1** to: `MMA – App Support`
6. Case status is **automatically set to In Progress**

<!-- Screenshot placeholder: Salesforce case creation for MMA -->

---

## 7. Important — Features Not Yet Available in MMA

Agents should proactively communicate these limitations to customers:

| Feature | Current Status | Workaround |
|---------|---------------|------------|
| **Loyalty Program** | Not fully available in the app. Discounts are included, but full loyalty benefits are not. | Direct customer to the **Europcar website** for full loyalty access |
| **Bundle Offers** | Not available yet | Standard pricing applies |
| **No-Show & Cancellation Fees** | No fees applied | N/A |

---

## 8. Quick Reference — Decision Flowchart

```
Customer contacts CS about MMA booking
│
├─ Modification request?
│   ├─ Option 1: Cancel & rebook in app (preferred)
│   └─ Option 2: Cancel in app → Agent duplicates in Greenway → Remove IATA → Complete booking
│
├─ Cancellation request?
│   └─ Direct customer to cancel in the MMA app (no fees apply)
│
├─ App issue / payment issue / account issue?
│   └─ DO NOT handle — Forward to MMA Team (see Section 6)
│
└─ Loyalty / bundle question?
    └─ Inform customer of limitations (see Section 7)
```

---

## 9. Key Contacts

| Team | Responsibility | How to Reach |
|------|---------------|--------------|
| **MMA – App Support** | All app-related issues | Salesforce case (Case Owner: MMA – App Support) |
| **EMG** | Programme owner | Internal escalation |

---

*This document is a living guide. Screenshots and additional details will be added as they become available. For updates, contact your team lead or refer to the latest version in the shared docs folder.*
