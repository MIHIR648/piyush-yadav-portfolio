#!/usr/bin/env python3
"""
=============================================================================
PIYUSH YADAV PORTFOLIO — AUTOMATED VIDEO FOLDER SYNC SCRIPT
=============================================================================
Usage:
    python sync_videos.py "C:\\Path\\To\\Your\\Video\\Folder"
    python sync_videos.py "D:\\Piyush_Edits"

What this script does:
1. Scans your specified folder for video files (.mp4, .mov, .webm, .mkv, .m4v).
2. Copies or links the videos into the portfolio's assets/videos directory.
3. Automatically generates an updated `user-videos.json` and `user-videos.js`.
4. Your portfolio website will immediately show your real work when refreshed!
=============================================================================
"""

import sys
import os
import shutil
import json
import re

# Ensure UTF-8 output on Windows terminal
if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
        sys.stderr.reconfigure(encoding='utf-8', errors='replace')
    except Exception:
        pass

SUPPORTED_EXTENSIONS = {'.mp4', '.mov', '.webm', '.m4v', '.mkv', '.avi'}

def clean_title(filename):
    name, _ = os.path.splitext(filename)
    # Remove common prefix tags or suffixes
    name = re.sub(r'[_\-\.]+', ' ', name)
    name = re.sub(r'\b(v\d+|final|edit|cut|render|4k|1080p|fhd|export|h264|prores)\b', '', name, flags=re.IGNORECASE)
    cleaned = ' '.join(word.capitalize() for word in name.strip().split())
    return cleaned if cleaned else filename

def guess_category(filename):
    lower = filename.lower()
    if any(k in lower for k in ['reel', 'short', 'tiktok', 'vertical', '9x16', '9_16', '9-16', 'story']):
        return 'reels', '9:16 Shorts & Reels', '9:16'
    elif any(k in lower for k in ['music', 'song', 'mv', 'beat', 'track']):
        return 'music', 'Music Videos', '2.39:1'
    elif any(k in lower for k in ['vfx', 'cgi', 'motion', '3d', 'aftereffects', 'blender', 'composite']):
        return 'vfx', 'VFX & Motion Design', '16:9'
    elif any(k in lower for k in ['color', 'lut', 'grade', 'raw', 'slog', 'logc', 'davinci']):
        return 'commercial', 'Color Grading Showcase', '16:9'
    else:
        return 'commercial', 'Commercial & Brand Ads', '16:9'

def sync_videos(source_folder):
    if not os.path.exists(source_folder):
        print(f"\n[ERROR] Source folder does not exist: {source_folder}")
        return False

    script_dir = os.path.dirname(os.path.abspath(__file__))
    target_videos_dir = os.path.join(script_dir, "assets", "videos")
    os.makedirs(target_videos_dir, exist_ok=True)

    print("\n=======================================================")
    print("[SYNC] PIYUSH YADAV VIDEO SYNC ENGINE // 2026")
    print("=======================================================")
    print(f"[*] Scanning source directory: {source_folder}")
    print(f"[*] Target portfolio directory: {target_videos_dir}")

    found_videos = []
    for root, dirs, files in os.walk(source_folder):
        for f in files:
            ext = os.path.splitext(f)[1].lower()
            if ext in SUPPORTED_EXTENSIONS:
                found_videos.append(os.path.join(root, f))

    if not found_videos:
        print(f"\n[!] No supported video files ({', '.join(SUPPORTED_EXTENSIONS)}) found in {source_folder}!")
        print("[!] Note: You can also use the in-browser folder picker by clicking 'SYNC VIDEOS' in index.html.")
        return False

    print(f"\n[OK] Found {len(found_videos)} video files. Processing...")

    synced_projects = []
    for idx, video_path in enumerate(found_videos, 1):
        filename = os.path.basename(video_path)
        # Create safe web-friendly filename
        safe_filename = re.sub(r'[^a-zA-Z0-9_\-\.]', '_', filename)
        dest_path = os.path.join(target_videos_dir, safe_filename)

        print(f"  [{idx}/{len(found_videos)}] Copying: {filename} -> assets/videos/{safe_filename}")
        try:
            if not os.path.exists(dest_path) or os.path.getsize(dest_path) != os.path.getsize(video_path):
                shutil.copy2(video_path, dest_path)
        except Exception as e:
            print(f"    [!] Warning copying file: {e}")

        cat_id, cat_label, aspect = guess_category(filename)
        title = clean_title(filename)

        project_item = {
            "id": f"local-{idx}",
            "title": title.upper(),
            "subtitle": f"Piyush Yadav Edit • {cat_label}",
            "category": cat_id,
            "categoryLabel": cat_label,
            "client": "Client Work // Piyush Yadav Archive",
            "year": "2026",
            "duration": "01:00",
            "aspectRatio": aspect,
            "resolution": "4K UHD • Master",
            "role": "Lead Editor • Colorist • Sound Design",
            "software": ["DaVinci Resolve", "Premiere Pro", "After Effects"],
            "metrics": "Master Timeline Delivery",
            "description": f"Custom edit project '{title}', cut, paced, and graded by Piyush Yadav.",
            "videoSrc": f"./assets/videos/{safe_filename}",
            "previewSrc": f"./assets/videos/{safe_filename}",
            "poster": "",
            "isLocal": True,
            "featured": idx <= 4
        }
        synced_projects.append(project_item)

    # Save to user-videos.json
    json_path = os.path.join(script_dir, "assets", "user-videos.json")
    with open(json_path, "w", encoding="utf-8") as jf:
        json.dump(synced_projects, jf, indent=2)
    print(f"\n[OK] Saved {len(synced_projects)} projects to {json_path}")

    # Create dynamic JS loader snippet
    js_sync_path = os.path.join(script_dir, "assets", "user-videos.js")
    with open(js_sync_path, "w", encoding="utf-8") as jsf:
        jsf.write("/* Auto-generated by sync_videos.py */\n")
        jsf.write("window.SYNCED_USER_VIDEOS = " + json.dumps(synced_projects, indent=2) + ";\n")
    print(f"[OK] Generated live loader: {js_sync_path}")

    print("\n=======================================================")
    print(f"[SUCCESS] {len(synced_projects)} VIDEOS SYNCED FOR PIYUSH YADAV!")
    print("👉 Simply refresh or open index.html in your browser to see your videos live!")
    print("=======================================================\n")
    return True

if __name__ == "__main__":
    if len(sys.argv) > 1:
        folder_arg = sys.argv[1].strip('\"\'')
        sync_videos(folder_arg)
    else:
        print("\n" + "="*60)
        print("PIYUSH YADAV VIDEO SYNC CLI TOOL")
        print("="*60)
        user_input = input("Enter the full folder path where Piyush's videos are stored: ").strip('\"\'')
        if user_input:
            sync_videos(user_input)
        else:
            print("No folder path entered. Exiting.")
