// const variables = {
//     customerId: "3f6e2ee0-ea8c-11ed-bae9-59b03a1940db",
//     entityId: "6a6a7881-0a2e-11ee-9ed5-4f9f91c3adb2",
//     finishTs: 1709279573156,
//     startTs: 1709270460491,
//     tenantId: "5f812e30-ea78-11ed-bae9-59b03a1940db",
//   };
  
//   const ApiObj = {
//     async tokenFetchData() {
//       const requestOptions = {
//         method: 'POST',
//         redirect: 'follow',
//       };
      
//       const response = await fetch(`https://platform.tingz.net/dashboardGroups/e87bb8d0-eaa1-11ed-bae9-59b03a1940db/5f48b6c0-8aa2-11ee-9b03-c3f741580b02`, requestOptions);
//       const tokenData = await response.json();
//       return tokenData; 
//     },
  
//     async fetchData(token) {
//       const requestOptions = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           customer_id: variables.customerId,
//           entity_id: variables.entityId,
//           finish_ts: variables.finishTs,
//           start_ts: variables.startTs,
//           tenant_id: variables.tenantId,
//           token: token, 
//         }),
//         redirect: 'follow',
//       };
      
//       const response = await fetch(`https://tokenserver.tingz.net/triplist`, requestOptions);
//       const data = await response.json();
//       return data;
//     },
//   };
  
//   export default ApiObj;
  