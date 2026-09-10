import React from 'react'

const orderSteps = [
  { id: 1, label: 'Order placed', date: 'Sep 6, 10:12 AM', done: true },
  { id: 2, label: 'Processing', date: 'Sep 6, 3:45 PM', done: true },
  { id: 3, label: 'Shipped', date: 'Sep 7, 9:20 AM', done: true },
  { id: 4, label: 'Out for delivery', date: 'Sep 10, 8:00 AM', done: false, current: true },
  { id: 5, label: 'Delivered', date: 'Expected Sep 10', done: false },
]

const orderItems = [
  { id: 1, name: 'Wireless headphones', qty: 1, price: 89.99 },
  { id: 2, name: 'Phone case', qty: 2, price: 14.5 },
]

const styles = {
  page: {
    maxWidth: 720,
    margin: '0 auto',
    padding: '32px 20px',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#1a1a1a',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
    flexWrap: 'wrap',
    gap: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: 600,
    margin: 0,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  badge: {
    padding: '6px 14px',
    borderRadius: 999,
    fontSize: 13,
    fontWeight: 600,
    backgroundColor: '#fff4e5',
    color: '#b5651d',
    border: '1px solid #f0d9b5',
    whiteSpace: 'nowrap',
  },
  card: {
    backgroundColor: '#fff',
    border: '1px solid #e5e5e5',
    borderRadius: 12,
    padding: 24,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 600,
    marginBottom: 20,
  },
  timeline: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  timelineItem: {
    display: 'flex',
    alignItems: 'flex-start',
    position: 'relative',
    paddingBottom: 28,
  },
  timelineLine: {
    position: 'absolute',
    left: 11,
    top: 24,
    bottom: 0,
    width: 2,
  },
  dot: (done, current) => ({
    width: 24,
    height: 24,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    fontWeight: 700,
    color: '#fff',
    backgroundColor: done ? '#2e7d32' : current ? '#1565c0' : '#d0d0d0',
    flexShrink: 0,
    marginRight: 14,
    boxShadow: current ? '0 0 0 4px rgba(21,101,192,0.15)' : 'none',
  }),
  stepLabel: (done, current) => ({
    fontSize: 14,
    fontWeight: current ? 600 : 500,
    color: done || current ? '#1a1a1a' : '#999',
  }),
  stepDate: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #f0f0f0',
    fontSize: 14,
  },
  lastRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 0 0',
    fontSize: 15,
    fontWeight: 600,
  },
  itemName: {
    color: '#1a1a1a',
  },
  itemMeta: {
    color: '#888',
    fontSize: 12,
  },
  addressGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 20,
  },
  addressLabel: {
    fontSize: 12,
    color: '#888',
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
  addressText: {
    fontSize: 14,
    lineHeight: 1.5,
  },
}

const OrderTracking = () => {
  const total = orderItems.reduce((sum, item) => sum + item.qty * item.price, 0)

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>Order #48213</h1>
          <p style={styles.subtitle}>Placed on September 6, 2026</p>
        </div>
        <span style={styles.badge}>Out for delivery</span>
      </div>

      <div style={styles.card}>
        <div style={styles.cardTitle}>Tracking status</div>
        <ul style={styles.timeline}>
          {orderSteps.map((step, index) => (
            <li key={step.id} style={styles.timelineItem}>
              {index !== orderSteps.length - 1 && (
                <div
                  style={{
                    ...styles.timelineLine,
                    backgroundColor: step.done ? '#2e7d32' : '#e0e0e0',
                  }}
                />
              )}
              <div style={styles.dot(step.done, step.current)}>
                {step.done ? '✓' : index + 1}
              </div>
              <div>
                <div style={styles.stepLabel(step.done, step.current)}>
                  {step.label}
                </div>
                <div style={styles.stepDate}>{step.date}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div style={styles.card}>
        <div style={styles.cardTitle}>Shipping details</div>
        <div style={styles.addressGrid}>
          <div>
            <div style={styles.addressLabel}>Delivery address</div>
            <div style={styles.addressText}>
              Ananya Sharma
              <br />
              221 Baker Street, Apt 4B
              <br />
              Bhubaneswar, Odisha 751001
            </div>
          </div>
          <div>
            <div style={styles.addressLabel}>Carrier</div>
            <div style={styles.addressText}>
              BlueDart Express
              <br />
              Tracking ID: BD3298471IN
            </div>
          </div>
        </div>
      </div>

      <div style={styles.card}>
        <div style={styles.cardTitle}>Order summary</div>
        {orderItems.map((item) => (
          <div key={item.id} style={styles.row}>
            <div>
              <div style={styles.itemName}>{item.name}</div>
              <div style={styles.itemMeta}>Qty {item.qty}</div>
            </div>
            <div>${(item.qty * item.price).toFixed(2)}</div>
          </div>
        ))}
        <div style={styles.lastRow}>
          <div>Total</div>
          <div>${total.toFixed(2)}</div>
        </div>
      </div>
    </div>
  )
}

export default OrderTracking