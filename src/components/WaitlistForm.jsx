import React, { useState } from 'react';
import "../components/GlassLayout.css";

const WaitlistForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', role: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // ✅ Your deployed URL
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzND6GOGfD-iUXgZzVHrtFbQ83Bek5ufInhpOGPCEkGt4EAe6RD2kiWvT7R7bZ74eSIMg/exec';

  const inputStyle = {
    width: '100%',
    padding: '1.125rem 1.5rem',
    borderRadius: '1rem',
    border: '2px solid rgba(124,58,237,0.15)',
    background: 'rgba(255,255,255,0.95)',
    backdropFilter: 'blur(20px)',
    fontSize: '1rem',
    fontWeight: 500,
    transition: 'all 0.3s ease',
    outline: 'none',
    boxSizing: 'border-box',
    boxShadow: '0 4px 20px rgba(124,58,237,0.08)'
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      company: formData.company || '',
      role: formData.role || '',
      timestamp: new Date().toLocaleString('en-IN')
    });

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // ✅ Fixes CORS locally
        body: payload
      });

      setSuccess(true);
      setFormData({ name: '', email: '', company: '', role: '' });
    } catch (error) {
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section className="card" style={{
        borderRadius: '1.5rem',
        padding: '2.5rem 2rem',
        background: 'linear-gradient(145deg, rgba(255,255,255,0.98), rgba(237,245,255,0.96))',
        textAlign: 'center',
        margin: '1rem'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🎉</div>
        <h2 className="heading-3" style={{ marginBottom: '1rem', color: '#16a34a' }}>
          You're In!
        </h2>
        <p className="desc" style={{ margin: 0, color: '#047857' }}>
          We'll notify you when we launch.
        </p>
      </section>
    );
  }

  return (
    <section className="card" style={{
      borderRadius: '1.5rem',
      padding: '2.25rem 2rem 2rem',
      background: 'linear-gradient(145deg, rgba(255,255,255,0.98), rgba(237,238,245,0.96))',
      margin: '1rem',
      maxWidth: 'min(500px, 95vw)',
      marginInline: 'auto'
    }}>
      <h2 className="heading-3" style={{ 
        marginBottom: '1.75rem', 
        fontSize: '1.5rem',
        textAlign: 'center'
      }}>
        Join Waitlist
      </h2>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} onSubmit={handleSubmit}>
        <div className="light-field">
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={loading}
            style={inputStyle}
          />
        </div>

        <div className="light-field">
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
            style={inputStyle}
          />
        </div>

        <div className="contact-grid-row" style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr', 
          gap: '1.25rem' 
        }}>
          <div className="light-field">
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              disabled={loading}
              style={{ ...inputStyle, fontSize: '0.95rem', padding: '1rem 1.5rem' }}
            />
          </div>
          <div className="light-field">
            <input
              type="text"
              name="role"
              placeholder="Role"
              value={formData.role}
              onChange={handleChange}
              disabled={loading}
              style={{ ...inputStyle, fontSize: '0.95rem', padding: '1rem 1.5rem' }}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || !formData.name || !formData.email}
          className="primary-btn"
          style={{
            marginTop: '1.25rem',
            width: '100%',
            borderRadius: '1rem',
            borderWidth: 0,
            fontSize: '1rem',
            justifyContent: 'center',
            gap: '0.5rem',
            padding: '1.125rem 2rem'
          }}
        >
          {loading ? 'Adding...' : 'Join Waitlist'}
        </button>
      </form>
    </section>
  );
};

export default WaitlistForm;
