export const userSchema ={
  name: 'users',
  title: 'Users',
  type: 'document',
  fields :[
    {

      name: 'address',
      title: 'Wallet Address',
      type: 'string',
    },
    {
      
      name: 'userName',
      title: 'User Name',
      type: 'string',
    },
    {
      name: 'transactions',
      title: 'Transactios',
      type: 'array',
      of: [
        {
          type: 'reference',
          // related to type transactions
          // transaction is a part of the transactions table in user
          to:[{type: 'transactions'}],
        },
      ],
    },


  ],
}