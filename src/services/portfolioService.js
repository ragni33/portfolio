// Data-access layer.
//
// Components read content through these functions rather than importing the
// data files directly. Today they return the local content in src/data; when a
// Node.js/Express API exists, set VITE_API_BASE_URL and swap the bodies for
// `request('/api/...')` calls without touching the UI components.

import {
  certifications,
  education,
  experience,
  profile,
  projects,
  skillCategories,
} from '../data/index.js';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

// Ready for future use, e.g. request('/api/projects')
export async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  });
  if (!response.ok) {
    throw new Error(`Request to ${path} failed with status ${response.status}`);
  }
  return response.json();
}

export const getProfile = () => profile;
export const getSkillCategories = () => skillCategories;
export const getExperience = () => experience;
export const getProjects = () => projects;
export const getEducation = () => education;
export const getCertifications = () => certifications;

// Builds a mailto: link for the contact form. A future POST /api/contact
// endpoint can replace this without changing the form markup.
export function buildMailtoLink({ name, email, subject, message }) {
  const lines = [message.trim(), '', '—', name.trim()];
  if (email.trim()) lines.push(email.trim());
  const params = new URLSearchParams({
    subject: subject.trim() || `Portfolio enquiry from ${name.trim()}`,
    body: lines.join('\n'),
  });
  // URLSearchParams encodes spaces as "+", which some mail clients keep literally.
  return `mailto:${profile.email}?${params.toString().replace(/\+/g, '%20')}`;
}
