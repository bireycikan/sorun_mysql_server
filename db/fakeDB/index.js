
const UsersQuery = `INSERT INTO 
  Users (user_id,email,password,role_id) 
  VALUES (1,'company_owner@sorun.com','owner',1),
  (2,'company_employee@sorun.com','employee',2)`;


const RolesQuery = `INSERT INTO
  Roles (role_id,role_name)
  VALUES (1,'Admin'), (2,'Staff')`;


const BranchesQuery = `INSERT INTO
  Branches (branch_id,name,full_address,phone,latitude,longitude)
  VALUES (1,'Branch 1','156 Tail Ends Road, Milwaukee, Wisconsin, 53202','920-547-4887','-55.05844','-126.19973'),
  (2,'Branch 2','4752 Clair Street, ROLLING PRAIRIE, Indiana, 46371','254-652-9204','46.71813','80.78088'),
  (3,'Branch 3','2718 Airplane Avenue, Rockville, Connecticut, 06066','860-870-6381','37.34668','119.01831'),
  (4,'Branch 4','3804 Woodrow Way, Houston, Texas, 77006','936-272-0580','-11.44885','-106.02734'),
  (5,'Branch 5','3824 Gorby Lane, Ridgeland, Mississippi, 39157','601-334-4694','2.56957','18.15332')`


module.exports = {
  Users: UsersQuery,
  Branches: BranchesQuery,
  Roles: RolesQuery
}