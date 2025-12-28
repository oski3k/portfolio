// Custom hook for Firebase Analytics tracking
import {
  logEvent,
  setCurrentScreen,
  setUserProperties,
} from "firebase/analytics";
import { useEffect } from "react";
import { analytics } from "../lib/firebase";

// Track page views
export const usePageView = (pageName: string) => {
  useEffect(() => {
    if (analytics) {
      logEvent(analytics, "page_view", {
        page_title: pageName,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
      setCurrentScreen(analytics, pageName);
    }
  }, [pageName]);
};

// Track custom events
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (analytics) {
    logEvent(analytics, eventName, eventParams);
  }
};

// Track project clicks
export const trackProjectClick = (projectName: string, projectUrl: string) => {
  trackEvent("project_click", {
    project_name: projectName,
    project_url: projectUrl,
  });
};

// Track contact form submission
export const trackContactFormSubmit = (method: string) => {
  trackEvent("contact_form_submit", {
    contact_method: method,
  });
};

// Track navigation clicks
export const trackNavigation = (section: string) => {
  trackEvent("navigation_click", {
    section_name: section,
  });
};

// Track language change
export const trackLanguageChange = (language: string) => {
  trackEvent("language_change", {
    new_language: language,
  });
  if (analytics) {
    setUserProperties(analytics, { preferred_language: language });
  }
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  trackEvent("scroll_depth", {
    scroll_percentage: depth,
  });
};

// Track social link clicks
export const trackSocialClick = (platform: string, url: string) => {
  trackEvent("social_click", {
    platform: platform,
    link_url: url,
  });
};

// Track time on page
export const useTimeOnPage = (pageName: string) => {
  useEffect(() => {
    const startTime = Date.now();

    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackEvent("time_on_page", {
        page_name: pageName,
        time_seconds: timeSpent,
      });
    };
  }, [pageName]);
};
