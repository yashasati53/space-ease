import Link from 'next/link';
import '../../admin.css';
import { products } from '@/data/products';

export default function AdminDashboard() {
  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">SpaceEase Admin</div>
        <nav>
          <Link href="/admin/dashboard" className="nav-item active">Dashboard</Link>
          <Link href="/admin/orders" className="nav-item">Orders</Link>
          <Link href="/admin/inventory" className="nav-item">Inventory</Link>
          <Link href="/admin/customers" className="nav-item">Customers</Link>
          <Link href="/admin/marketing" className="nav-item">Marketing</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <div className="dashboard-header">
          <h1 className="heading-md">Operations & KPI Overview</h1>
          <Link href="/mock" className="btn-primary" style={{ display: "inline-block", textAlign: "center", textDecoration: "none" }}>Generate Report</Link>
        </div>

        {/* Business KPIs */}
        <h2 className="heading-md" style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Core Metrics</h2>
        <div className="stat-cards" style={{ marginBottom: '4rem' }}>
          <div className="stat-card">
            <div className="stat-title">Monthly Traffic</div>
            <div className="stat-value">45.2K</div>
            <div style={{ color: '#137333', fontSize: '0.8rem', marginTop: '0.5rem' }}>↑ 12% vs last month</div>
          </div>
          <div className="stat-card">
            <div className="stat-title">Customer Acquisition Cost (CAC)</div>
            <div className="stat-value">₹320</div>
            <div style={{ color: '#137333', fontSize: '0.8rem', marginTop: '0.5rem' }}>↓ 5% vs last month</div>
          </div>
          <div className="stat-card">
            <div className="stat-title">Churn Rate</div>
            <div className="stat-value">2.4%</div>
            <div style={{ color: '#c5221f', fontSize: '0.8rem', marginTop: '0.5rem' }}>↑ 0.2% vs last month</div>
          </div>
          <div className="stat-card">
            <div className="stat-title">Conversion Rate</div>
            <div className="stat-value">3.8%</div>
            <div style={{ color: '#137333', fontSize: '0.8rem', marginTop: '0.5rem' }}>↑ 0.5% vs last month</div>
          </div>
        </div>

        {/* Sales Stats */}
        <h2 className="heading-md" style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Sales & Impact</h2>
        <div className="stat-cards">
          <div className="stat-card">
            <div className="stat-title">Total Sales (MTD)</div>
            <div className="stat-value">₹4.2L</div>
          </div>
          <div className="stat-card">
            <div className="stat-title">Active Orders</div>
            <div className="stat-value">34</div>
          </div>
          <div className="stat-card">
            <div className="stat-title">Return Rate</div>
            <div className="stat-value">1.2%</div>
          </div>
          <div className="stat-card">
            <div className="stat-title">Avg. Sustainability Score</div>
            <div className="stat-value">8.9/10</div>
          </div>
        </div>

        {/* Inventory & CRM Snapshot */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '3rem' }}>
          
          {/* Recent Orders */}
          <div>
            <h2 className="heading-md" style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Recent Orders</h2>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#ORD-8392</td>
                  <td>Rahul Sharma</td>
                  <td><span className="status-badge status-processing">Processing</span></td>
                </tr>
                <tr>
                  <td>#ORD-8391</td>
                  <td>Priya Singh</td>
                  <td><span className="status-badge status-shipped">Shipped</span></td>
                </tr>
                <tr>
                  <td>#ORD-8390</td>
                  <td>Arjun Patel</td>
                  <td><span className="status-badge status-processing">Processing</span></td>
                </tr>
                <tr>
                  <td>#ORD-8389</td>
                  <td>Sneha Gupta</td>
                  <td><span className="status-badge status-shipped">Shipped</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Real Inventory Table */}
          <div>
            <h2 className="heading-md" style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Inventory Status</h2>
            <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
              <table className="data-table">
                <thead style={{ position: 'sticky', top: 0, backgroundColor: 'var(--bg-primary)' }}>
                  <tr>
                    <th>Product</th>
                    <th>Stock</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product.id}>
                      <td style={{ fontSize: '0.9rem' }}>{product.name}</td>
                      <td>{product.stock}</td>
                      <td>
                        {product.stock <= 5 ? (
                          <span className="status-badge status-low-stock">Low Stock</span>
                        ) : product.stock <= 15 ? (
                          <span className="status-badge status-processing">Reorder Soon</span>
                        ) : (
                          <span className="status-badge status-in-stock">In Stock</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
