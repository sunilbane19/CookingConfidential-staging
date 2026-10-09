# Trigger scanned OCR syntax fix deployment

Cache-bust source review module to 1.0.64.

OCR parser 1.0.32 deployment trigger, 2026-10-09.

OCR parser 1.0.33 metadata cleanup deployment trigger, 2026-10-09.

Force fresh inbox entry module URL 1.0.65, 2026-10-09.

Deploy generalized OCR title, description and numeric servings fix (parser 1.0.34) 2026-10-09.

Deploy generalized single-word OCR title-fragment rejection (parser 1.0.35) 2026-10-09.

Deploy OCR promotional-fragment title/description filter parser 1.0.36 2026-10-09.

Deploy scanned PDF page-one title boundary fix (parser 1.0.44) 2026-10-09. Source commit 0fc7d83ca646f64fbbe5c9238db53a0a31f94481.

Deploy scanned PDF description boundary, notes end-boundary, and Chermoula method cleanup (parser 1.0.45), 2026-10-09. Source commit 4c881ae10cd0df2ce1599ff30a3ed28fb57b335b.

Deploy OCR parser 1.0.46: tighten Chermoula trailing method artefact and Grandma's notes end boundary, 2026-10-09. Source commit 28f2dd1f52ec3a95d3bc390339e942930c9ae572.

Deploy parser 1.0.48: support Food52 Shell/Filling grouped ingredients and Step N methods; preserve description after byline, 2026-10-09. Source commit c0de31abb232bbbfed84ff15100232c1ab7730ee.

Deploy OCR parser 1.0.49: stop notes at Special Equipment and downstream site sections; filter OCR metadata fragments in description. Source commit a0d748e3b64cd90d0a93947ec53761012e91b226.

Staging refresh for OCR parser 1.0.50. Source b9f686850e8854a0dea32ac7926099824d59dbaa.

Refresh OCR parser 1.0.51: normalize title punctuation for intro matching and stop description at byline/section boundaries. Source commit e91571fd8b5aa92d9e09f7eb508bd693fe9d078e.

Deploy parser 1.0.52: do not treat author byline as end of description; continue through recipe metadata to genuine introduction, stop at section/page boundary. Source commit f6935b9819ca4ccf333d241f7dfba4c44e44b8f5. Regression scope: Greek Zucchini Fritters, Grandma’s Zucchini Cake, Fatima’s Vegetarian Kibbeh; preserve Chimichurri and Mango Salad.
