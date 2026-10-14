# Staging deployment trigger

Fix recipe creator member query on rescue-ocr-fallback-test: select id, auth_user_id, display_name, active and do not filter out null auth_user_id. The selector must show all registered members. Accounts without linked auth IDs are visible but disabled with an explanatory label; linked accounts remain assignable. Preserve compact Add layout and Edit alignment. Staging only; Live unchanged.
