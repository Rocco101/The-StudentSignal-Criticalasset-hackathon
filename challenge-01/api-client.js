/**
 * CriticalAsset GraphQL API Client
 * The City Hacks The State 2026 - NYC Tech Week
 * 
 * Authentication: userSignIn mutation -> JWT token
 * Endpoint: https://api.criticalasset.com/gql
 * Required Headers:
 *   - Authorization: Bearer <token>
 *   - company-id: <company-uuid>
 *   - Content-Type: application/json
 */

const CA_API = 'https://api.criticalasset.com/gql';

/**
 * Sign in and get JWT token
 */
async function signIn(email, passwordHash) {
  const response = await fetch(CA_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `mutation { userSignIn(data: { email: "${email}", passwordRaw: "${passwordHash}" }) { jwtToken } }`
    })
  });
  const data = await response.json();
  return data.data.userSignIn.jwtToken;
}

/**
 * Fetch all work orders
 */
async function getWorkOrders(token, companyId) {
  const response = await fetch(CA_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'company-id': companyId
    },
    body: JSON.stringify({
      query: `{ 
        workOrders { 
          totalCount 
          workOrders { 
            id name description createdAt 
            workOrderStage { id name } 
            location { id address1 address2 city state zip }
            assignments { id }
          } 
        } 
      }`
    })
  });
  const data = await response.json();
  return data.data.workOrders;
}

/**
 * Fetch locations
 */
async function getLocations(token, companyId) {
  const response = await fetch(CA_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'company-id': companyId
    },
    body: JSON.stringify({
      query: '{ locations { id address1 address2 city state zip } }'
    })
  });
  const data = await response.json();
  return data.data.locations;
}

/**
 * Create a new company (requires agreements: true)
 */
async function createCompany(token, name) {
  const response = await fetch(CA_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      query: `mutation { companyCreate(data: { name: "${name}", agreements: true }) { id name } }`
    })
  });
  const data = await response.json();
  return data.data.companyCreate;
}

// Export for use
if (typeof module !== 'undefined') {
  module.exports = { signIn, getWorkOrders, getLocations, createCompany };
}
