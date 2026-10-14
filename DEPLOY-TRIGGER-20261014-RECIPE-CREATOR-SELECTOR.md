# Staging deployment trigger

Follow-up fix for the Created by selector: include all cc_members entries in the visible list, including members who have not signed in yet. Pending accounts must be visibly marked and disabled because created_by stores auth user UUIDs and those accounts do not have one linked; do not write invalid or null creator assignments. Align Edit's Created by control label/input with Add original file. Compact Add selector remains beside Recipe name. Staging only; Live unchanged.
