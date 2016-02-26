<?php

use App\Permission;
use App\Role;
use App\User;
use Illuminate\Database\Seeder;

class EntrustTableSeeder extends Seeder {

	public function run()
	{

		DB::table('role_user')->truncate();
		DB::table('permission_role')->truncate();
		DB::table('roles')->truncate();
		DB::table('permissions')->truncate();

		$admin = new Role(); // 1
		$admin->name = 'admin';
		$admin->display_name = "Administrator";
		$admin->level = 10;
		$admin->save();

		//User Editor
		$user_editor = new Role(); // 2
		$user_editor->name = 'user_editor';
		$user_editor->display_name = "User editor";
		$user_editor->level = 9;
		$user_editor->save();

		$post_editor = new Role(); // 2
		$post_editor->name = 'post_editor';
		$post_editor->display_name = "Post Editor";
		$post_editor->level = 5;
		$post_editor->save();

		$writer = new Role(); // 2
		$writer->name = 'writer';
		$writer->display_name = "Writer";
		$writer->level = 5;
		$writer->save();

		$faq_editor = new Role(); // 2
		$faq_editor->name = 'faq_editor';
		$faq_editor->display_name = "Faq Editor";
		$faq_editor->level = 5;
		$faq_editor->save();

		$product_editor = new Role(); // 2
		$product_editor->name = 'product_editor';
		$product_editor->display_name = "Product Editor";
		$product_editor->level = 5;
		$product_editor->save();

		$appearance_editor = new Role(); // 2
		$appearance_editor->name = 'Appearance_editor';
		$appearance_editor->display_name = "Appearance Editor";
		$appearance_editor->level = 5;
		$appearance_editor->save();

		$userRole = new Role(); // 3
		$userRole->name = 'user';
		$userRole->display_name = "User";
		$userRole->level = 5;
		$userRole->save();

		$appearanceRole = new Role(); // 3
		$appearanceRole->name = 'appearance';
		$appearanceRole->display_name = "Has Appearances";
		$appearanceRole->level = 3;
		$appearanceRole->save();

		$user = User::where('email', '=', 'zack@octopodainteractive.com')->first();
		$user->attachRole($admin);
		
		$user1 = User::where('email', '=', 'jennifer@mcdanielnutrition.com')->first();
		$user1->attachRole($admin);
		$user1->attachRole($appearanceRole);

		$user2 = User::where('email', '=', 'kylie@mcdanielnutrition.com')->first();
		$user2->attachRole($post_editor);
		$user2->attachRole($appearanceRole);
		
		//Roles
		$manageRoles = new Permission();
		$manageRoles->name = 'manage_roles';
		$manageRoles->display_name = "Manage roles";
		$manageRoles->description = "";
		$manageRoles->route = "roles";
		$manageRoles->save();

		$createRoles = new Permission();
		$createRoles->name = 'create_roles';
		$createRoles->display_name = "Create roles";
		$createRoles->description = "";
		$createRoles->route = "roles/create";
		$createRoles->save();

		$updateRoles = new Permission();
		$updateRoles->name = 'update_roles';
		$updateRoles->display_name = "Update roles";
		$updateRoles->description = "";
		$updateRoles->route = "roles/{roles}/edit";
		$updateRoles->save();

		$destroyRoles = new Permission();
		$destroyRoles->name = 'delete_roles';
		$destroyRoles->display_name = "Delete roles";
		$destroyRoles->description = "";
		$destroyRoles->route = "roles/{roles}";
		$destroyRoles->save();

		//Users
		$manageUsers = new Permission();
		$manageUsers->name = 'manage_users';
		$manageUsers->display_name = "Manager users";
		$manageUsers->description = "";
		$manageUsers->route = "users";
		$manageUsers->save();

		$createUsers = new Permission();
		$createUsers->name = 'create_users';
		$createUsers->display_name = "Create users";
		$createUsers->description = "";
		$createUsers->route = "users/create";
		$createUsers->save();

		$updateUsers = new Permission();
		$updateUsers->name = 'update_users';
		$updateUsers->display_name = "Update users";
		$updateUsers->description = "";
		$updateUsers->route = "users/{users}/edit";
		$updateUsers->save();

		$destroyUsers = new Permission();
		$destroyUsers->name = 'delete_users';
		$destroyUsers->display_name = "Delete users";
		$destroyUsers->description = "";
		$destroyUsers->route = "users/{users}";
		$destroyUsers->save();

		//Permissions
		$managePerms = new Permission();
		$managePerms->name = 'manage_permissions';
		$managePerms->display_name = "Manage permissions";
		$managePerms->description = "";
		$managePerms->route = "permissions";
		$managePerms->save();

		$createPerms = new Permission();
		$createPerms->name = 'create_permissions';
		$createPerms->display_name = "Create permissions";
		$createPerms->description = "";
		$createPerms->route = "permissions/create";
		$createPerms->save();

		$updatePerms = new Permission();
		$updatePerms->name = 'update_permissions';
		$updatePerms->display_name = "Update permissions";
		$updatePerms->description = "";
		$updatePerms->route = "permissions/{permissions}/edit";
		$updatePerms->save();

		$destroyPerms = new Permission();
		$destroyPerms->name = 'delete_permissions';
		$destroyPerms->display_name = "Delete permissions";
		$destroyPerms->description = "";
		$destroyPerms->route = "permissions/{permissions}";
		$destroyPerms->save();

		//Appearances
		$hasAppearance = new Permission();
		$hasAppearance->name = "has_appearances";
		$hasAppearance->display_name = "Has Appearances";
		$hasAppearance->description = "User can have appearances";
		$hasAppearance->route = "appearances/hasAppearances";
		$hasAppearance->save();

		$manageAppearance = new Permission();
		$manageAppearance->name = "manage_appearances";
		$manageAppearance->display_name = "Manage Appearances";
		$manageAppearance->description = "";
		$manageAppearance->route = "appearances";
		$manageAppearance->save();

		$createAppearance = new Permission();
		$createAppearance->name = "create_appearances";
		$createAppearance->display_name = "Create Appearances";
		$createAppearance->description = "";
		$createAppearance->route = "appearances/create";
		$createAppearance->save();

		$updateAppearance = new Permission();
		$updateAppearance->name = "update_appearances";
		$updateAppearance->display_name = "Update Appearances";
		$updateAppearance->description = "";
		$updateAppearance->route = "appearances/{appearance}/edit";
		$updateAppearance->save();
		
		$destroyAppearance = new Permission();
		$destroyAppearance->name = "delete_appearances";
		$destroyAppearance->display_name = "Delete Appearances";
		$destroyAppearance->description = "";
		$destroyAppearance->route = "appearances/{appearance}";
		$destroyAppearance->save();

		//Posts
		$managePosts = new Permission();
		$managePosts->name = "manage_posts";
		$managePosts->display_name = "Manage Posts";
		$managePosts->description = "";
		$managePosts->route = "posts";
		$managePosts->save();

		$createPosts = new Permission();
		$createPosts->name = "create_posts";
		$createPosts->display_name = "Create Posts";
		$createPosts->description = "";
		$createPosts->route = "posts/create";
		$createPosts->save();

		$updatePosts = new Permission();
		$updatePosts->name = "update_posts";
		$updatePosts->display_name = "Update Posts";
		$updatePosts->description = "";
		$updatePosts->route = "post/{post}/edit";
		$updatePosts->save();
		
		$destroyPosts = new Permission();
		$destroyPosts->name = "delete_posts";
		$destroyPosts->display_name = "Delete Posts";
		$destroyPosts->description = "";
		$destroyPosts->route = "appearances/{post}";
		$destroyPosts->save();

		$publishPosts = new Permission();
		$publishPosts->name = "publish_posts";
		$publishPosts->display_name = "Publish Posts";
		$publishPosts->description = "";
		$publishPosts->route = "appearances/{post}";
		$publishPosts->save();


		//Categories
		$manageCategories = new Permission();
		$manageCategories->name = "manage_categories";
		$manageCategories->display_name = "Manage Categories";
		$manageCategories->description = "";
		$manageCategories->route = "posts";
		$manageCategories->save();

		$createCategories = new Permission();
		$createCategories->name = "create_categories";
		$createCategories->display_name = "Create Categories";
		$createCategories->description = "";
		$createCategories->route = "Categories/create";
		$createCategories->save();

		$updateCategories = new Permission();
		$updateCategories->name = "update_categories";
		$updateCategories->display_name = "Update Categories";
		$updateCategories->description = "";
		$updateCategories->route = "category/{category}/edit";
		$updateCategories->save();
		
		$destroyCategories = new Permission();
		$destroyCategories->name = "delete_categories";
		$destroyCategories->display_name = "Delete Categories";
		$destroyCategories->description = "";
		$destroyCategories->route = "appearances/{category}";
		$destroyCategories->save();

		$publishCategories = new Permission();
		$publishCategories->name = "publish_categories";
		$publishCategories->display_name = "Publish Categories";
		$publishCategories->description = "";
		$publishCategories->route = "appearances/{category}";
		$publishCategories->save();

		//Faqs
		$manageFaqs = new Permission();
		$manageFaqs->name = "manage_faqs";
		$manageFaqs->display_name = "Manage Faqs";
		$manageFaqs->description = "";
		$manageFaqs->route = "Faqs";
		$manageFaqs->save();

		$createFaqs = new Permission();
		$createFaqs->name = "create_faqs";
		$createFaqs->display_name = "Create Faqs";
		$createFaqs->description = "";
		$createFaqs->route = "Faqs/create";
		$createFaqs->save();

		$updateFaqs = new Permission();
		$updateFaqs->name = "update_faqs";
		$updateFaqs->display_name = "Update Faqs";
		$updateFaqs->description = "";
		$updateFaqs->route = "post/{faq}/edit";
		$updateFaqs->save();
		
		$destroyFaqs = new Permission();
		$destroyFaqs->name = "delete_faqs";
		$destroyFaqs->display_name = "Delete Faqs";
		$destroyFaqs->description = "";
		$destroyFaqs->route = "appearances/{faq}";
		$destroyFaqs->save();

		//Products
		$manageProducts = new Permission();
		$manageProducts->name = "manage_products";
		$manageProducts->display_name = "Manage Products";
		$manageProducts->description = "";
		$manageProducts->route = "Products";
		$manageProducts->save();

		$createProducts = new Permission();
		$createProducts->name = "create_products";
		$createProducts->display_name = "Create Products";
		$createProducts->description = "";
		$createProducts->route = "Products/create";
		$createProducts->save();

		$updateProducts = new Permission();
		$updateProducts->name = "update_products";
		$updateProducts->display_name = "Update Products";
		$updateProducts->description = "";
		$updateProducts->route = "post/{product}/edit";
		$updateProducts->save();
		
		$destroyProducts = new Permission();
		$destroyProducts->name = "delete_products";
		$destroyProducts->display_name = "Delete Products";
		$destroyProducts->description = "";
		$destroyProducts->route = "appearances/{products}";
		$destroyProducts->save();

		//Store
		$storeManager = new Permission();
		$storeManager->name = "store_manager";
		$storeManager->display_name = "Store Manager";
		$storeManager->description = "Can change settings for Store";
		$storeManager->route = "store/";
		$storeManager->save();

		//Site
		$siteManager = new Permission();
		$siteManager->name = "site_manager";
		$siteManager->display_name = "Site Manager";
		$siteManager->description = "Can change settings for site";
		$siteManager->route = "site/";
		$siteManager->save();


		$admin->attachPermissions([
				$manageRoles, $createRoles, $updateRoles, $destroyRoles, 
				$manageUsers, $createUsers, $updateUsers, $destroyUsers, 
				$managePerms, $createPerms, $updatePerms, $destroyPerms,
				$manageAppearance, $createAppearance, $updateAppearance, $destroyAppearance,
				$managePosts, $createPosts, $updatePosts, $destroyPosts, $publishPosts,
				$manageCategories, $createCategories, $updateCategories, $destroyCategories, $publishCategories,
				$manageFaqs, $createFaqs, $updateFaqs, $destroyFaqs,
				$manageProducts, $createProducts, $updateProducts, $destroyProducts,
				$storeManager, $siteManager
		]);
		
		$user_editor->attachPermissions([
				$manageRoles, $createRoles, $updateRoles, $destroyRoles, 
				$manageUsers, $createUsers, $updateUsers, $destroyUsers, 
				$managePerms, $createPerms, $updatePerms, $destroyPerms,
		]);

		$post_editor->attachPermissions([
			$managePosts, $createPosts, $updatePosts, $destroyPosts, $publishPosts
		]);

		$writer->attachPermissions([
			$managePosts, $createPosts, $updatePosts, $destroyPosts
		]);

		$faq_editor->attachPermissions([
			$manageFaqs, $createFaqs, $updateFaqs, $destroyFaqs,
		]);
		
		$product_editor->attachPermissions([
			$manageProducts, $createProducts, $updateProducts, $destroyProducts
		]);

		$appearance_editor->attachPermissions([
			$manageAppearance, $createAppearance, $updateAppearance, $destroyAppearance,
		]);
		

	}

}