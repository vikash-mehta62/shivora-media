"use client";
import { useState, useEffect } from 'react';
import { Search, Mail, Phone, Building, Globe, Calendar, Eye, Trash2, X } from 'lucide-react';
import { useAppSelector } from '@/store/hooks';
import axios from 'axios';
import { API_ENDPOINTS } from '@/config/api';

interface Contact {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  service?: string;
  budget?: string;
  message?: string;
  source: string;
  status: 'new' | 'contacted' | 'converted' | 'closed';
  notes?: string;
  createdAt: string;
}

interface Stats {
  total: number;
  new: number;
  contacted: number;
  converted: number;
}

export default function ContactsManager() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [stats, setStats] = useState<Stats>({ total: 0, new: 0, contacted: 0, converted: 0 });
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const { token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    fetchContacts();
  }, [token, filterStatus]);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const params: any = { limit: 100 };
      if (filterStatus !== 'all') params.status = filterStatus;
      if (searchTerm) params.search = searchTerm;

      const response = await axios.get(API_ENDPOINTS.CONTACT.BASE, {
        headers: { Authorization: `Bearer ${token}` },
        params
      });
      
      setContacts(response.data.contacts || []);
      setStats(response.data.stats || { total: 0, new: 0, contacted: 0, converted: 0 });
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      await axios.patch(API_ENDPOINTS.CONTACT.BY_ID(id), 
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchContacts();
      if (selectedContact?._id === id) {
        setSelectedContact({ ...selectedContact, status: status as any });
      }
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const deleteContact = async (id: string) => {
    if (!confirm('Are you sure you want to delete this contact?')) return;

    try {
      await axios.delete(API_ENDPOINTS.CONTACT.DELETE(id), {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchContacts();
      setSelectedContact(null);
    } catch (error) {
      console.error('Failed to delete contact:', error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500/20 text-blue-400';
      case 'contacted': return 'bg-yellow-500/20 text-yellow-400';
      case 'converted': return 'bg-green-500/20 text-green-400';
      case 'closed': return 'bg-gray-500/20 text-gray-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getSourceLabel = (source: string) => {
    switch (source) {
      case 'contact-page': return 'Contact Page';
      case 'home-page': return 'Home Page';
      case 'popup': return 'Popup Form';
      default: return source;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          { label: 'Total Contacts', value: stats.total, color: 'from-blue-500 to-blue-600' },
          { label: 'New', value: stats.new, color: 'from-purple-500 to-purple-600' },
          { label: 'Contacted', value: stats.contacted, color: 'from-yellow-500 to-yellow-600' },
          { label: 'Converted', value: stats.converted, color: 'from-green-500 to-green-600' },
        ].map((stat, index) => (
          <div key={index} className="bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-700">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 sm:mb-4`}>
              <Mail className="text-white" size={20} />
            </div>
            <h3 className="text-gray-400 text-xs sm:text-sm mb-1">{stat.label}</h3>
            <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search contacts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && fetchContacts()}
            className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-2">
          {['all', 'new', 'contacted', 'converted', 'closed'].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                filterStatus === status
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Contacts Table */}
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="text-white text-lg">Loading contacts...</div>
        </div>
      ) : contacts.length === 0 ? (
        <div className="text-center py-16 bg-gray-800 rounded-xl border border-gray-700">
          <Mail size={64} className="mx-auto text-gray-600 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No contacts found</h3>
          <p className="text-gray-400">Contacts will appear here when users submit forms</p>
        </div>
      ) : (
        <>
          {/* Desktop Table View */}
          <div className="hidden lg:block bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-700/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Contact</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Service</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Source</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Date</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {contacts.map((contact) => (
                    <tr key={contact._id} className="hover:bg-gray-700/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="text-white font-medium">{contact.name}</div>
                        {contact.company && <div className="text-gray-400 text-sm">{contact.company}</div>}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-gray-400 text-sm">{contact.email}</div>
                        {contact.phone && <div className="text-gray-400 text-sm">{contact.phone}</div>}
                      </td>
                      <td className="px-6 py-4 text-gray-400 text-sm">{contact.service || '-'}</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded text-xs font-medium bg-gray-700 text-gray-300">
                          {getSourceLabel(contact.source)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={contact.status}
                          onChange={(e) => updateStatus(contact._id, e.target.value)}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(contact.status)} bg-transparent border-0 cursor-pointer`}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="converted">Converted</option>
                          <option value="closed">Closed</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 text-gray-400 text-sm">{formatDate(contact.createdAt)}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setSelectedContact(contact)}
                            className="p-2 hover:bg-gray-700 rounded-lg text-gray-400 hover:text-white transition-colors"
                          >
                            <Eye size={18} />
                          </button>
                          <button
                            onClick={() => deleteContact(contact._id)}
                            className="p-2 hover:bg-red-500/10 rounded-lg text-gray-400 hover:text-red-400 transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden space-y-4">
            {contacts.map((contact) => (
              <div key={contact._id} className="bg-gray-800 rounded-xl border border-gray-700 p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-white font-medium mb-1">{contact.name}</h3>
                    {contact.company && <p className="text-gray-400 text-sm">{contact.company}</p>}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedContact(contact)}
                      className="p-2 hover:bg-gray-700 rounded-lg text-gray-400 hover:text-white transition-colors"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      onClick={() => deleteContact(contact._id)}
                      className="p-2 hover:bg-red-500/10 rounded-lg text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail size={14} className="text-gray-500" />
                    <span className="text-gray-400">{contact.email}</span>
                  </div>
                  {contact.phone && (
                    <div className="flex items-center gap-2 text-sm">
                      <Phone size={14} className="text-gray-500" />
                      <span className="text-gray-400">{contact.phone}</span>
                    </div>
                  )}
                  {contact.service && (
                    <div className="flex items-center gap-2 text-sm">
                      <Building size={14} className="text-gray-500" />
                      <span className="text-gray-400">{contact.service}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar size={14} className="text-gray-500" />
                    <span className="text-gray-400">{formatDate(contact.createdAt)}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-700">
                  <span className="px-2 py-1 rounded text-xs font-medium bg-gray-700 text-gray-300">
                    {getSourceLabel(contact.source)}
                  </span>
                  <select
                    value={contact.status}
                    onChange={(e) => updateStatus(contact._id, e.target.value)}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(contact.status)} bg-gray-900 border border-gray-700 cursor-pointer`}
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="converted">Converted</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Contact Detail Modal */}
      {selectedContact && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedContact(null)}>
          <div className="bg-gray-800 rounded-xl p-6 max-w-2xl w-full border border-gray-700 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{selectedContact.name}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedContact.status)}`}>
                  {selectedContact.status}
                </span>
              </div>
              <button
                onClick={() => setSelectedContact(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={20} className="text-gray-500" />
                <a href={`mailto:${selectedContact.email}`} className="hover:text-blue-400">{selectedContact.email}</a>
              </div>
              
              {selectedContact.phone && (
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone size={20} className="text-gray-500" />
                  <a href={`tel:${selectedContact.phone}`} className="hover:text-blue-400">{selectedContact.phone}</a>
                </div>
              )}
              
              {selectedContact.company && (
                <div className="flex items-center gap-3 text-gray-300">
                  <Building size={20} className="text-gray-500" />
                  <span>{selectedContact.company}</span>
                </div>
              )}
              
              {selectedContact.website && (
                <div className="flex items-center gap-3 text-gray-300">
                  <Globe size={20} className="text-gray-500" />
                  <a href={selectedContact.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">{selectedContact.website}</a>
                </div>
              )}
              
              <div className="flex items-center gap-3 text-gray-300">
                <Calendar size={20} className="text-gray-500" />
                <span>{formatDate(selectedContact.createdAt)}</span>
              </div>
            </div>

            {selectedContact.service && (
              <div className="mt-6 p-4 bg-gray-700/50 rounded-lg">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Service Interested In</h4>
                <p className="text-white">{selectedContact.service}</p>
              </div>
            )}

            {selectedContact.budget && (
              <div className="mt-4 p-4 bg-gray-700/50 rounded-lg">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Budget</h4>
                <p className="text-white">{selectedContact.budget}</p>
              </div>
            )}

            {selectedContact.message && (
              <div className="mt-4 p-4 bg-gray-700/50 rounded-lg">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Message</h4>
                <p className="text-white whitespace-pre-wrap">{selectedContact.message}</p>
              </div>
            )}

            <div className="mt-6 flex gap-3">
              <a
                href={`mailto:${selectedContact.email}`}
                className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-center transition-colors"
              >
                Send Email
              </a>
              {selectedContact.phone && (
                <a
                  href={`tel:${selectedContact.phone}`}
                  className="flex-1 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold text-center transition-colors"
                >
                  Call Now
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
