'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface FormData {
  fullName: string;
  businessName: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  websiteUrl: string;
  businessDescription: string;
  budget: string;
  additionalComments: string;
}

const questions = [
  {
    id: 'fullName',
    label: "Let's start with your full name",
    placeholder: 'Type your answer here...',
    type: 'text',
  },
  {
    id: 'businessName',
    label: 'What is your business name?',
    placeholder: 'Type your answer here...',
    type: 'text',
  },
  {
    id: 'email',
    label: 'What is your email address?',
    placeholder: 'Type your answer here...',
    type: 'email',
  },
  {
    id: 'phone',
    label: 'What is your phone number?',
    placeholder: '',
    type: 'phone',
  },
  {
    id: 'websiteUrl',
    label: 'Do you have a website URL?',
    placeholder: 'Type your answer here... (or leave blank)',
    type: 'text',
  },
  {
    id: 'businessDescription',
    label: 'Tell us about your business',
    placeholder: 'Type your answer here...',
    type: 'textarea',
  },
  {
    id: 'budget',
    label: 'What is your budget range?',
    placeholder: 'Type your answer here...',
    type: 'text',
  },
  {
    id: 'additionalComments',
    label: 'Any additional comments?',
    placeholder: 'Type your answer here... (optional)',
    type: 'textarea',
  },
];

const countryCodes = [
  { code: '+1', country: 'US/CA' },
  { code: '+44', country: 'UK' },
  { code: '+91', country: 'IN' },
  { code: '+92', country: 'PK' },
  { code: '+61', country: 'AU' },
  { code: '+86', country: 'CN' },
  { code: '+81', country: 'JP' },
  { code: '+49', country: 'DE' },
  { code: '+33', country: 'FR' },
  { code: '+971', country: 'AE' },
];

export default function GetInTouch() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    businessName: '',
    email: '',
    countryCode: '+1',
    phoneNumber: '',
    websiteUrl: '',
    businessDescription: '',
    budget: '',
    additionalComments: '',
  });
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load from local storage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('contactFormData');
    if (savedData) {
      try {
        setFormData(JSON.parse(savedData));
      } catch (e) {
        console.error('Failed to parse saved form data', e);
      }
    }
  }, []);

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('contactFormData', JSON.stringify(formData));
  }, [formData]);

  const currentQuestion = questions[currentStep];

  const handleInputChange = (value: string, field?: string) => {
    if (currentQuestion.id === 'phone') {
      if (field === 'countryCode') {
        setFormData({ ...formData, countryCode: value });
      } else {
        setFormData({ ...formData, phoneNumber: value });
      }
    } else {
      setFormData({ ...formData, [currentQuestion.id]: value });
    }
  };

  const handleNext = async () => {
    // Check if current field is required and filled
    if (currentQuestion.id === 'phone') {
      if (!formData.phoneNumber.trim()) return;
    } else if (
      currentQuestion.id !== 'websiteUrl' &&
      currentQuestion.id !== 'additionalComments'
    ) {
      const value = formData[currentQuestion.id as keyof FormData];
      if (!value.trim()) return;
    }

    setIsAnimating(true);
    setError(null);

    setTimeout(async () => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
        setIsAnimating(false);
      } else {
        // Form completed
        setIsAnimating(false);
        setIsSubmitting(true);

        try {
          const { error: supabaseError } = await supabase
            .from('form_submissions')
            .insert([
              {
                full_name: formData.fullName,
                business_name: formData.businessName,
                email: formData.email,
                country_code: formData.countryCode,
                phone_number: formData.phoneNumber,
                website_url: formData.websiteUrl,
                business_description: formData.businessDescription,
                budget: formData.budget,
                additional_comments: formData.additionalComments,
              },
            ]);

          if (supabaseError) throw supabaseError;

          // Clear local storage on success
          localStorage.removeItem('contactFormData');
          console.log('Form Data:', formData);
          setIsSubmitted(true);
        } catch (err: any) {
          console.error('Submission error:', err);
          setError(err.message || 'Something went wrong. Please try again.');
        } finally {
          setIsSubmitting(false);
        }
      }
    }, 300);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleNext();
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-12">Get in touch</h1>

          <div className="bg-black rounded-2xl p-12 md:p-20 text-center animate-fadeIn">
            <div className="mb-6">
              <svg
                className="w-20 h-20 mx-auto text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Thanks!
            </h2>
            <p className="text-xl text-gray-300">
              We'll be in touch soon
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        <div className="flex justify-between items-start mb-12">
          <h1 className="text-4xl md:text-4xl font-bold text-black">Get in touch</h1>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            Fill out the form below and Marketo360 will get back to you as soon as we can.
          </p>
        </div>

        <div
          className={`bg-black rounded-2xl p-8 md:p-16 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
        >
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl text-white font-normal mb-8 flex items-start">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-black text-sm font-bold mr-3 flex-shrink-0 mt-1">
                {currentStep + 1}
              </span>
              <span>{currentQuestion.label}</span>
            </h2>

            {currentQuestion.type === 'phone' ? (
              <div className="flex gap-4">
                <select
                  value={formData.countryCode}
                  onChange={(e) => handleInputChange(e.target.value, 'countryCode')}
                  className="bg-transparent border-b-2 border-gray-700 text-gray-400 py-3 px-2 focus:outline-none focus:border-white transition-colors w-32"
                >
                  {countryCodes.map((item) => (
                    <option key={item.code} value={item.code} className="bg-black">
                      {item.code} {item.country}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange(e.target.value, 'phoneNumber')}
                  onKeyPress={handleKeyPress}
                  placeholder="Phone number"
                  className="flex-1 bg-transparent border-b-2 border-gray-700 text-white placeholder-gray-500 py-3 px-2 focus:outline-none focus:border-white transition-colors"
                  autoFocus
                />
              </div>
            ) : currentQuestion.type === 'textarea' ? (
              <textarea
                value={formData[currentQuestion.id as keyof FormData]}
                onChange={(e) => handleInputChange(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={currentQuestion.placeholder}
                rows={4}
                className="w-full bg-transparent border-b-2 border-gray-700 text-white placeholder-gray-500 py-3 px-2 focus:outline-none focus:border-white transition-colors resize-none"
                autoFocus
              />
            ) : (
              <input
                type={currentQuestion.type}
                value={formData[currentQuestion.id as keyof FormData]}
                onChange={(e) => handleInputChange(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={currentQuestion.placeholder}
                className="w-full bg-transparent border-b-2 border-gray-700 text-white placeholder-gray-500 py-3 px-2 focus:outline-none focus:border-white transition-colors"
                autoFocus
              />
            )}
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>

          <button
            onClick={handleNext}
            disabled={isSubmitting}
            className="bg-white text-black font-semibold px-8 py-3 rounded-md hover:bg-gray-200 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'OK'}
          </button>

          <div className="flex justify-end gap-2 mt-8">
            <button
              onClick={() => {
                if (currentStep > 0) {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentStep(currentStep - 1);
                    setIsAnimating(false);
                  }, 300);
                }
              }}
              disabled={currentStep === 0 || isSubmitting}
              className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={isSubmitting}
              className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors disabled:opacity-50"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {/* Progress indicator */}
          <div className="mt-8 flex gap-1">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`h-1 flex-1 rounded-full transition-colors ${index <= currentStep ? 'bg-white' : 'bg-gray-700'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}