# Cooking Confidential --- Staging Baseline

**Recorded:** 27 October 2026\
**Repository:** `sunilbane19/CookingConfidential-staging`\
**Branch:** `main`\
**Staging URL:**
https://sunilbane19.github.io/CookingConfidential-staging/

## Baseline reference

-   Frozen Live V2.1 reference commit:
    `23be2cef99f065dc5bc8bd6fe7cc1ab9421c0341`
-   The reference commit is an ancestor of `origin/main`.
-   Comparing the reference commit with `origin/main` showed one file
    difference: `CNAME` was deleted.
-   The deleted `CNAME` contained `cookingconfidential.in`. Its removal
    is intentional; Staging must not claim Live's custom domain.

## GitHub Pages configuration

-   Publishing source: **Deploy from a branch**
-   Branch: `main`
-   Folder: `/(root)`
-   Pages build and deployment workflow: successful at the time of
    verification.
-   The earlier custom deployment workflow `deploy-pages.yml` failed
    with a Pages API `Not Found` error before the Pages configuration
    was enabled. It has not been cleaned up as part of this baseline
    record.

## Verification performed

-   Staging URL loaded in the browser.
-   Email sign-in completed successfully.
-   The recipe library loaded after sign-in.
-   Recipe cards and images were visible.
-   The account header and recipe actions were visible.

## Data and safety notes

-   Staging intentionally shares the Supabase project/database with
    Live.
-   Do not use Staging for create, edit, or delete tests unless
    explicitly planned, because those actions may affect shared Live
    data.
-   Live was not changed during this setup.
-   This record documents the verified state; it does not assert that
    the current deployed files are byte-for-byte identical to the frozen
    V2.1 commit. The intentional `CNAME` deletion is the only difference
    reported by the inspected diff.

## Next housekeeping item

Review and clean up the obsolete `deploy-pages.yml` workflow separately.
Do not modify Live deployment configuration.
