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

    useEffect(() => {
        const authed = sessionStorage.getItem('admin_authed');
        if (authed === 'true') {
            setIsAuthenticated(true);
            setShowModal(false);
        }
    }, []);

    useEffect(() => {
        if (isAuthenticated) fetchSubmissions();
    }, [isAuthenticated]);

    const fetchSubmissions = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('form_submissions')
            .select('*')
            .order('created_at', { ascending: false });
        if (!error) setSubmissions(data || []);
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

    const formatDate = (dateStr: string) =>
        new Date(dateStr).toLocaleDateString('en-US', {
            year: 'numeric', month: 'short', day: 'numeric',
            hour: '2-digit', minute: '2-digit',
        });

    // ── Password Gate ──
    if (showModal || !isAuthenticated) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
                <div className="fixed inset-0 bg-white/60 backdrop-blur-md" />
                <div className="relative z-10 bg-white rounded-2xl p-8 sm:p-10 w-full max-w-sm shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-gray-100">
                    {/* Lock icon */}
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center">
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 text-center mb-1">Admin Access</h2>
                    <p className="text-gray-400 text-center text-sm mb-8">Enter password to continue</p>

                    <form onSubmit={handlePasswordSubmit}>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value); setError(''); }}
                            placeholder="Password"
                            autoFocus
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition-all text-sm"
                        />
                        {error && (
                            <p className="text-red-500 text-xs mt-2 flex items-center gap-1.5">
                                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                                {error}
                            </p>
                        )}
                        <button type="submit" className="w-full mt-4 bg-black text-white font-medium py-3.5 rounded-xl hover:bg-gray-800 active:scale-[0.98] transition-all text-sm">
                            Unlock
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // ── Admin Dashboard ──
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                    <div>
                        <h1 className="text-lg sm:text-xl font-bold text-gray-900">Submissions</h1>
                        <p className="text-gray-400 text-xs mt-0.5">
                            {submissions.length} {submissions.length === 1 ? 'entry' : 'entries'}
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={fetchSubmissions}
                            disabled={loading}
                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm transition-colors flex items-center gap-1.5 disabled:opacity-50"
                        >
                            <svg className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            <span className="hidden sm:inline">Refresh</span>
                        </button>
                        <button
                            onClick={() => { sessionStorage.removeItem('admin_authed'); setIsAuthenticated(false); setShowModal(true); }}
                            className="bg-red-50 hover:bg-red-100 text-red-600 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
                {loading ? (
                    <div className="flex items-center justify-center py-20">
                        <div className="w-7 h-7 border-2 border-gray-200 border-t-black rounded-full animate-spin" />
                    </div>
                ) : submissions.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                        </div>
                        <h3 className="text-base font-semibold text-gray-500 mb-1">No submissions yet</h3>
                        <p className="text-gray-400 text-sm">Entries from the Get in Touch page will show here.</p>
                    </div>
                ) : (
                    <>
                        {/* ── Desktop Table ── */}
                        <div className="hidden md:block bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-gray-100 bg-gray-50/60">
                                            <th className="text-left px-5 py-3 text-gray-500 font-medium text-xs uppercase tracking-wider">#</th>
                                            <th className="text-left px-5 py-3 text-gray-500 font-medium text-xs uppercase tracking-wider">Date</th>
                                            <th className="text-left px-5 py-3 text-gray-500 font-medium text-xs uppercase tracking-wider">Name</th>
                                            <th className="text-left px-5 py-3 text-gray-500 font-medium text-xs uppercase tracking-wider">Business</th>
                                            <th className="text-left px-5 py-3 text-gray-500 font-medium text-xs uppercase tracking-wider">Email</th>
                                            <th className="text-left px-5 py-3 text-gray-500 font-medium text-xs uppercase tracking-wider">Phone</th>
                                            <th className="text-left px-5 py-3 text-gray-500 font-medium text-xs uppercase tracking-wider">Budget</th>
                                            <th className="text-left px-5 py-3 text-gray-500 font-medium text-xs uppercase tracking-wider"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {submissions.map((sub, i) => (
                                            <tr key={sub.id}
                                                className="border-b border-gray-50 hover:bg-gray-50/80 transition-colors cursor-pointer"
                                                onClick={() => setSelectedSubmission(sub)}
                                            >
                                                <td className="px-5 py-4 text-gray-400">{i + 1}</td>
                                                <td className="px-5 py-4 text-gray-500 whitespace-nowrap text-xs">{formatDate(sub.created_at)}</td>
                                                <td className="px-5 py-4 text-gray-900 font-medium">{sub.full_name}</td>
                                                <td className="px-5 py-4 text-gray-600">{sub.business_name}</td>
                                                <td className="px-5 py-4">
                                                    <a href={`mailto:${sub.email}`} onClick={(e) => e.stopPropagation()} className="text-blue-600 hover:text-blue-700 hover:underline">{sub.email}</a>
                                                </td>
                                                <td className="px-5 py-4 whitespace-nowrap">
                                                    <a href={`tel:${sub.country_code}${sub.phone_number}`} onClick={(e) => e.stopPropagation()} className="text-blue-600 hover:text-blue-700 hover:underline">
                                                        {sub.country_code} {sub.phone_number}
                                                    </a>
                                                </td>
                                                <td className="px-5 py-4 text-gray-600">{sub.budget || '—'}</td>
                                                <td className="px-5 py-4">
                                                    <a
                                                        href={`https://wa.me/${sub.country_code.replace('+', '')}${sub.phone_number}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="inline-flex items-center gap-1.5 text-green-700 bg-green-50 hover:bg-green-100 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                                                    >
                                                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.61.61l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.325 0-4.47-.744-6.227-2.01l-.442-.325-3.281 1.1 1.1-3.281-.325-.442A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                                                        </svg>
                                                        WhatsApp
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* ── Mobile Cards ── */}
                        <div className="md:hidden space-y-3">
                            {submissions.map((sub, i) => (
                                <div
                                    key={sub.id}
                                    onClick={() => setSelectedSubmission(sub)}
                                    className="bg-white border border-gray-200 rounded-xl p-4 active:bg-gray-50 transition-colors cursor-pointer shadow-sm"
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-semibold text-gray-900 truncate">{sub.full_name}</p>
                                            <p className="text-xs text-gray-500 mt-0.5">{sub.business_name}</p>
                                        </div>
                                        <span className="text-[10px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full flex-shrink-0 ml-2">
                                            #{i + 1}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 text-xs">
                                        <a href={`mailto:${sub.email}`} onClick={(e) => e.stopPropagation()}
                                            className="inline-flex items-center gap-1 text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            Email
                                        </a>
                                        <a href={`tel:${sub.country_code}${sub.phone_number}`} onClick={(e) => e.stopPropagation()}
                                            className="inline-flex items-center gap-1 text-green-600 bg-green-50 px-2.5 py-1 rounded-lg">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            Call
                                        </a>
                                        <a href={`https://wa.me/${sub.country_code.replace('+', '')}${sub.phone_number}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                                            className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.61.61l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.325 0-4.47-.744-6.227-2.01l-.442-.325-3.281 1.1 1.1-3.281-.325-.442A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                                            </svg>
                                            WhatsApp
                                        </a>
                                    </div>
                                    <p className="text-[10px] text-gray-400 mt-3">{formatDate(sub.created_at)}</p>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </main>

            {/* ── Detail Modal ── */}
            {selectedSubmission && (
                <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-end sm:items-center justify-center z-50 p-0 sm:p-6"
                    onClick={() => setSelectedSubmission(null)}>
                    <div className="bg-white w-full sm:w-auto sm:min-w-[480px] sm:max-w-lg sm:rounded-2xl rounded-t-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200"
                        onClick={(e) => e.stopPropagation()}>

                        {/* Header */}
                        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-gray-100 sticky top-0 bg-white sm:rounded-t-2xl rounded-t-2xl">
                            <div>
                                <h2 className="text-lg font-bold text-gray-900">{selectedSubmission.full_name}</h2>
                                <p className="text-gray-400 text-xs mt-0.5">{formatDate(selectedSubmission.created_at)}</p>
                            </div>
                            <button onClick={() => setSelectedSubmission(null)}
                                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Details */}
                        <div className="p-5 sm:p-6 space-y-4">
                            <DetailRow label="Full Name" value={selectedSubmission.full_name} />
                            <DetailRow label="Business Name" value={selectedSubmission.business_name} />
                            <DetailRow label="Email" value={selectedSubmission.email} isLink href={`mailto:${selectedSubmission.email}`} />
                            <DetailRow label="Phone" value={`${selectedSubmission.country_code} ${selectedSubmission.phone_number}`} isLink href={`tel:${selectedSubmission.country_code}${selectedSubmission.phone_number}`} />
                            <DetailRow label="Website" value={selectedSubmission.website_url || '—'} isLink={!!selectedSubmission.website_url} href={selectedSubmission.website_url?.startsWith('http') ? selectedSubmission.website_url : `https://${selectedSubmission.website_url}`} />
                            <DetailRow label="Business Description" value={selectedSubmission.business_description || '—'} isLong />
                            <DetailRow label="Budget" value={selectedSubmission.budget || '—'} />
                            <DetailRow label="Additional Comments" value={selectedSubmission.additional_comments || '—'} isLong />
                        </div>

                        {/* Footer Actions */}
                        <div className="p-5 sm:p-6 border-t border-gray-100 flex gap-2">
                            <a href={`mailto:${selectedSubmission.email}`}
                                className="flex-1 bg-black text-white font-medium py-2.5 rounded-xl text-center text-sm hover:bg-gray-800 active:scale-[0.98] transition-all">
                                Email
                            </a>
                            <a href={`tel:${selectedSubmission.country_code}${selectedSubmission.phone_number}`}
                                className="flex-1 bg-gray-100 text-gray-700 font-medium py-2.5 rounded-xl text-center text-sm hover:bg-gray-200 active:scale-[0.98] transition-all">
                                Call
                            </a>
                            <a href={`https://wa.me/${selectedSubmission.country_code.replace('+', '')}${selectedSubmission.phone_number}`}
                                target="_blank" rel="noopener noreferrer"
                                className="flex-1 bg-green-50 text-green-700 font-medium py-2.5 rounded-xl text-center text-sm hover:bg-green-100 active:scale-[0.98] transition-all">
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
            <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider mb-1">{label}</p>
            {isLink && value !== '—' ? (
                <a href={href} target={label === 'Website' ? '_blank' : undefined} rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 hover:underline text-sm break-all">
                    {value}
                </a>
            ) : (
                <p className={`text-gray-900 text-sm ${isLong ? 'whitespace-pre-wrap' : ''} break-words`}>{value}</p>
            )}
        </div>
    );
}
