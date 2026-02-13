'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

const ADMIN_PASSWORD = 'zahid123';

interface FormSubmission {
    id: number;
    created_at: string;
    full_name: string;
    business_name: string;
    email: string;
    country_code: string;
    phone_number: string;
    website_url: string;
    business_description: string;
    budget: string;
    additional_comments: string;
}

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(true);
    const [error, setError] = useState('');
    const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);

    // Check session storage on mount
    useEffect(() => {
        const authed = sessionStorage.getItem('admin_authed');
        if (authed === 'true') {
            setIsAuthenticated(true);
            setShowModal(false);
        }
    }, []);

    // Fetch submissions once authenticated
    useEffect(() => {
        if (isAuthenticated) {
            fetchSubmissions();
        }
    }, [isAuthenticated]);

    const fetchSubmissions = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('form_submissions')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching submissions:', error);
        } else {
            setSubmissions(data || []);
        }
        setLoading(false);
    };

    const handlePasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setIsAuthenticated(true);
            setShowModal(false);
            setError('');
            sessionStorage.setItem('admin_authed', 'true');
        } else {
            setError('Incorrect password');
            setPassword('');
        }
    };

    const formatDate = (dateStr: string) => {
        return new Date(dateStr).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    // Password Modal
    if (showModal || !isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
                {/* Backdrop blur overlay */}
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />

                {/* Modal */}
                <div className="relative z-10 bg-gray-900 border border-gray-800 rounded-2xl p-8 w-full max-w-md shadow-2xl">
                    <div className="flex items-center justify-center mb-6">
                        <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center">
                            <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                            </svg>
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold text-white text-center mb-2">
                        Protected Area
                    </h2>
                    <p className="text-gray-500 text-center mb-8 text-sm">
                        Enter the admin password to continue
                    </p>

                    <form onSubmit={handlePasswordSubmit}>
                        <div className="mb-4">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                                placeholder="Password"
                                autoFocus
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                            />
                            {error && (
                                <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                    {error}
                                </p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                            Unlock
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // Admin Dashboard
    return (
        <div className="min-h-screen bg-gray-950 text-white">
            {/* Header */}
            <div className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-md sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Form Submissions</h1>
                        <p className="text-gray-500 text-sm mt-0.5">
                            {submissions.length} {submissions.length === 1 ? 'entry' : 'entries'}
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={fetchSubmissions}
                            disabled={loading}
                            className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 disabled:opacity-50"
                        >
                            <svg className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            Refresh
                        </button>
                        <button
                            onClick={() => {
                                sessionStorage.removeItem('admin_authed');
                                setIsAuthenticated(false);
                                setShowModal(true);
                            }}
                            className="bg-red-900/50 hover:bg-red-900 text-red-300 hover:text-white px-4 py-2 rounded-lg text-sm transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8">
                {loading ? (
                    <div className="flex items-center justify-center py-20">
                        <div className="w-8 h-8 border-2 border-gray-700 border-t-white rounded-full animate-spin" />
                    </div>
                ) : submissions.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-400 mb-1">No submissions yet</h3>
                        <p className="text-gray-600 text-sm">Form submissions from the Get in Touch page will appear here.</p>
                    </div>
                ) : (
                    <>
                        {/* Table */}
                        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-gray-800 bg-gray-900/50">
                                            <th className="text-left px-4 py-3 text-gray-400 font-medium">#</th>
                                            <th className="text-left px-4 py-3 text-gray-400 font-medium">Date</th>
                                            <th className="text-left px-4 py-3 text-gray-400 font-medium">Name</th>
                                            <th className="text-left px-4 py-3 text-gray-400 font-medium">Business</th>
                                            <th className="text-left px-4 py-3 text-gray-400 font-medium">Email</th>
                                            <th className="text-left px-4 py-3 text-gray-400 font-medium">Phone</th>
                                            <th className="text-left px-4 py-3 text-gray-400 font-medium">Budget</th>
                                            <th className="text-left px-4 py-3 text-gray-400 font-medium">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {submissions.map((sub, index) => (
                                            <tr
                                                key={sub.id}
                                                className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors cursor-pointer"
                                                onClick={() => setSelectedSubmission(sub)}
                                            >
                                                <td className="px-4 py-3 text-gray-500">{index + 1}</td>
                                                <td className="px-4 py-3 text-gray-400 whitespace-nowrap">{formatDate(sub.created_at)}</td>
                                                <td className="px-4 py-3 text-white font-medium">{sub.full_name}</td>
                                                <td className="px-4 py-3 text-gray-300">{sub.business_name}</td>
                                                <td className="px-4 py-3">
                                                    <a href={`mailto:${sub.email}`} className="text-blue-400 hover:text-blue-300 hover:underline" onClick={(e) => e.stopPropagation()}>
                                                        {sub.email}
                                                    </a>
                                                </td>
                                                <td className="px-4 py-3 whitespace-nowrap">
                                                    <a href={`tel:${sub.country_code}${sub.phone_number}`} className="text-blue-400 hover:text-blue-300 hover:underline" onClick={(e) => e.stopPropagation()}>
                                                        {sub.country_code} {sub.phone_number}
                                                    </a>
                                                </td>
                                                <td className="px-4 py-3 text-gray-300">{sub.budget || '—'}</td>
                                                <td className="px-4 py-3">
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); setSelectedSubmission(sub); }}
                                                        className="text-gray-500 hover:text-white transition-colors"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Detail Modal */}
            {selectedSubmission && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 z-50" onClick={() => setSelectedSubmission(null)}>
                    <div className="bg-gray-900 border border-gray-800 rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-800 sticky top-0 bg-gray-900 rounded-t-2xl">
                            <div>
                                <h2 className="text-xl font-bold text-white">{selectedSubmission.full_name}</h2>
                                <p className="text-gray-500 text-sm mt-0.5">{formatDate(selectedSubmission.created_at)}</p>
                            </div>
                            <button onClick={() => setSelectedSubmission(null)} className="text-gray-500 hover:text-white p-1 transition-colors">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 space-y-5">
                            <DetailRow label="Full Name" value={selectedSubmission.full_name} />
                            <DetailRow label="Business Name" value={selectedSubmission.business_name} />
                            <DetailRow label="Email" value={selectedSubmission.email} isLink href={`mailto:${selectedSubmission.email}`} />
                            <DetailRow label="Phone" value={`${selectedSubmission.country_code} ${selectedSubmission.phone_number}`} isLink href={`tel:${selectedSubmission.country_code}${selectedSubmission.phone_number}`} />
                            <DetailRow label="Website" value={selectedSubmission.website_url || '—'} isLink={!!selectedSubmission.website_url} href={selectedSubmission.website_url?.startsWith('http') ? selectedSubmission.website_url : `https://${selectedSubmission.website_url}`} />
                            <DetailRow label="Business Description" value={selectedSubmission.business_description || '—'} isLong />
                            <DetailRow label="Budget" value={selectedSubmission.budget || '—'} />
                            <DetailRow label="Additional Comments" value={selectedSubmission.additional_comments || '—'} isLong />
                        </div>

                        {/* Modal Footer Actions */}
                        <div className="p-6 border-t border-gray-800 flex gap-3">
                            <a
                                href={`mailto:${selectedSubmission.email}`}
                                className="flex-1 bg-white text-black font-semibold py-2.5 rounded-lg text-center text-sm hover:bg-gray-200 transition-colors"
                            >
                                Send Email
                            </a>
                            <a
                                href={`tel:${selectedSubmission.country_code}${selectedSubmission.phone_number}`}
                                className="flex-1 bg-gray-800 text-white font-semibold py-2.5 rounded-lg text-center text-sm hover:bg-gray-700 transition-colors"
                            >
                                Call
                            </a>
                            <a
                                href={`https://wa.me/${selectedSubmission.country_code.replace('+', '')}${selectedSubmission.phone_number}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-green-800/50 text-green-300 font-semibold py-2.5 rounded-lg text-center text-sm hover:bg-green-800 transition-colors"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function DetailRow({ label, value, isLink, href, isLong }: { label: string; value: string; isLink?: boolean; href?: string; isLong?: boolean }) {
    return (
        <div>
            <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">{label}</p>
            {isLink && value !== '—' ? (
                <a href={href} target={label === 'Website' ? '_blank' : undefined} rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline break-all">
                    {value}
                </a>
            ) : (
                <p className={`text-white ${isLong ? 'whitespace-pre-wrap' : ''} break-words`}>{value}</p>
            )}
        </div>
    );
}
