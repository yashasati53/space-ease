import Link from 'next/link';
import '../admin.css'; // Import specific admin styles

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
          <h1 className="heading-md">Overview</h1>
          <button className="btn-primary">Generate Report</button>
        </div>

        {/* Stats */}
        <div className="stat-cards">
          <div className="stat-card">
            <div className="stat-title">Total Sales</div>
            <div className="stat-value">₹4.2L</div>
          </div>
          <div className="stat-card">
            <div className="stat-title">Active Orders</div>
            <div className="stat-value">34</div>
          </div>
          <div className="stat-card">
            <div className="stat-title">New Customers</div>
            <div className="stat-value">128</div>
          </div>
          <div className="stat-card">
            <div className="stat-title">Sustainability Score</div>
            <div className="stat-value">A+</div>
          </div>
        </div>

        {/* Inventory & CRM Snapshot */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          
          {/* Recent Orders */}
          <div>
            <h2 className="heading-md" style={{ marginBottom: '1.5rem' }}>Recent Orders</h2>
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
                  <td>#ORD-001</td>
                  <td>Rahul Sharma</td>
                  <td><span className="status-badge status-processing">Processing</span></td>
                </tr>
                <tr>
                  <td>#ORD-002</td>
                  <td>Priya Singh</td>
                  <td><span className="status-badge status-shipped">Shipped</span></td>
                </tr>
                <tr>
                  <td>#ORD-003</td>
                  <td>Arjun Patel</td>
                  <td><span className="status-badge status-processing">Processing</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Inventory Alerts */}
          <div>
            <h2 className="heading-md" style={{ marginBottom: '1.5rem' }}>Inventory Alerts</h2>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Stock</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Origami Foldable Desk</td>
                  <td>4</td>
                  <td><span className="status-badge status-low-stock">Low Stock</span></td>
                </tr>
                <tr>
                  <td>Tetris Modular Bookshelf</td>
                  <td>12</td>
                  <td><span className="status-badge status-in-stock">In Stock</span></td>
                </tr>
                <tr>
                  <td>Under-bed Eco Box</td>
                  <td>2</td>
                  <td><span className="status-badge status-low-stock">Reorder</span></td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </main>
    </div>
  );
}
