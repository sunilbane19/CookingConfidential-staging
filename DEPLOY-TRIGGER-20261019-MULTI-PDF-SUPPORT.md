# Staging deployment trigger — 2026-10-19

Deploy the current `rescue-ocr-fallback-test` source branch to staging to test multi-recipe PDF imports.

Scope: staging only. Live production site must remain untouched.

Changes include PDF text-layer extraction, scanned-PDF OCR fallback, PDF cache bypass, and multi-recipe importer cache busting.